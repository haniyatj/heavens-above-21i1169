const { getTable } = require('./src/satellite'); // Adjust the path if necessary

describe('Satellite Table Functionality', () => {
  // Mocking the config object for testing
  const config = {
    target: '1234',
    root: './data/',
    pages: 2
  };

  // Test case for getTable function
  test('getTable fetches satellite pass data and processes it', () => {
    // Mocking the database and counter
    const database = [];
    const counter = 0;
    const opt = 0;

    // Calling the getTable function with mock parameters
    getTable({ ...config, database, counter, opt });

 
  });
});
