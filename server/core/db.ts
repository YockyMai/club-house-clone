import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  String(process.env.DB_NAME),
  String(process.env.DB_USER),
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.HOST,
    port: Number(process.env.DB_PORT),
    logging: true,
  }
);

export { sequelize };
