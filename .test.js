const getTable = require('./src/satellite'); // Assuming the file is named satellite.js
const fs = require('fs').promises; // Using promises for file system interactions

jest.mock('request'); // Mocking request library for controlled responses

describe('getTable functionality', () => {
  let mockRequest;
  let database;
  let config;

  beforeEach(() => {
    mockRequest = jest.fn().mockResolvedValue([/* Mock response body */]);
    request.get = mockRequest;
    database = [];
    config = {
      target: '1234',
      pages: 2,
      root: './data/'
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('fetches and processes satellite pass data (single page)', async () => {
    // Mock successful HTML response for the first page
    mockRequest.mockResolvedValueOnce([`<!DOCTYPE html>
      <html>...</html>`, {}, '']); // Sample valid HTML

    await getTable({ ...config, database });

    // Assertions after data processing
    expect(database.length).toBeGreaterThan(0); // Check data is populated
    expect(fs.writeFile).toHaveBeenCalledTimes(1); // Ensure JSON file is saved
    expect(fs.writeFile).toHaveBeenCalledWith(config.root + 'index.json', expect.anyString()); // Check file content partially (avoid full data comparison)
  });

  test('fetches multiple pages if configured', async () => {
    // Mock successful HTML responses for both pages
    mockRequest.mockResolvedValueOnce([`<!DOCTYPE html> (page 1)...</html>`, {}, ''])
      .mockResolvedValueOnce([`<!DOCTYPE html> (page 2)...</html>`, {}, '']);

    await getTable({ ...config, database });

    // Assertions after processing both pages
    expect(database.length).toBeGreaterThan(0); // Check data is populated
    expect(mockRequest).toHaveBeenCalledTimes(4); // Two requests per page
    expect(fs.writeFile).toHaveBeenCalledTimes(1); // JSON file saved after all pages
  });

  test('handles errors during request', async () => {
    const error = new Error('Network Error');
    mockRequest.mockRejectedValue(error);

    await expect(getTable({ ...config, database })).rejects.toThrow(error);

    // No assertions on database or file system as request fails
  });

  test('handles missing directory for data storage', async () => {
    // Mock successful HTML response
    mockRequest.mockResolvedValueOnce([`<!DOCTYPE html>...</html>`, {}, '']);
    jest.spyOn(fs, 'mkdir').mockResolvedValue(); // Avoid actual directory creation

    await getTable({ ...config, database });

    // Assertions after data processing and directory creation
    expect(database.length).toBeGreaterThan(0);
    expect(fs.mkdir).toHaveBeenCalledWith(config.root, { recursive: true });
  });
});
