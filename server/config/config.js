



  const development =  {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT
  }
  const local = {
    username: "root",
    password: null,
    databas: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  }
  const production = {
    usernam: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }



  module.exports = {development , local, production}

