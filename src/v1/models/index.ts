import knex, { Knex } from "knex";

export const db: Knex = knex({
  client: "mssql",
  connection: {
    server: "202.134.21.53",
    port: 1433,
    user: "vstdata",
    password: "vstdata",
    database: "VSTDataFeed",
  },
});

export const dbLocal: Knex = knex({
  client: "mssql",
  connection: {
    server: "ENNKHENHH",
    port: 1433,
    user: "sa",
    password: "1",
    database: "QLBDT",
  },
});
