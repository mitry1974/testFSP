import fastify from 'fastify';
const fastifySequelize = require('fastify-sequelize');
const config = require('./dbconfig');

export default async () => {
  const app = fastify();
  app.register(fastifySequelize, config);
  return app;
}
