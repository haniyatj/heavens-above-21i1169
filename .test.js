const { getTimestamp, md5 } = require('./src/utils');

describe('Utility Functions', () => {
  //Test case for getTimestamp function
  test('getTimestamp converts time string to seconds', () => {
    const time = '12:30:15';
    const expectedSeconds = 12 * 3600 + 30 * 60 + 15;
    expect(getTimestamp(time)).toBe(expectedSeconds);
  });

  //Test case for md5 function
  test('md5 calculates the MD5 hash of a string', () => {
    const inputString = 'hello';
    const expectedHash = '5d41402abc4b2a76b9719d911017c592';
    expect(md5(inputString)).toBe(expectedHash);
  });
});
