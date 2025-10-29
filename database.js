export   default  {
  dev: {
    driver: "pg",
    host: "localhost",
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_DB_PWD,
    port: 5432
  }
};
