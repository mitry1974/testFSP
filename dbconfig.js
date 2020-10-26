const config = {
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
    operatorsAliases: 1,
    logging: false,
  },
};
module.exports = config.test;
