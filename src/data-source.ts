import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Usuario } from "./entities/usuario.entities";
import { Detector } from "./entities/detector.entities";
import { default1708105109118 } from "./migrations/1708105109118-default";

const port = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Usuario, Detector],
  migrations: [default1708105109118],
  subscribers: []
});

AppDataSource.initialize()