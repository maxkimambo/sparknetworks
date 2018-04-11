const request = require('supertest');
const app = require('./../src/api/app');

describe('Test the root path', () => {
  test('Index route should return 200 OK', (done) => {
    request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
