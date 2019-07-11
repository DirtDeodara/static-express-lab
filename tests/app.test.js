const request = require('supertest');
const { app } = require('../lib/app');

describe('app routes', () => {
  it('requested / path', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('COLORS!!'));
      });
  });

  it('requested / path', () => {
    return request(app)
      .get('/color.html?name=red')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Color Detail'));
      });
  });
});
