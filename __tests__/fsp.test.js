const fastify = require('fastify');
const fastifySequelize = require('fastify-sequelize');
const config = require('../dbconfig');

let app;

beforeEach(async () => {
  try {
    app = fastify ();
    app.register(fastifySequelize, config);
await app.ready();
  } catch(e) {
    console.log('application start throw an error');
    console.log(e);
  }
});

afterEach(async () => {
  try{
    await app.close();
  } catch (e) {
    console.log('app.close throw an error');
    console.log(e);
  }
  app = null;
});

test('1', () => {
  expect(5).toBe(5);
});

test('2', () => {
  expect(6).toBe(6);
});
