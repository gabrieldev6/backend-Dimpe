import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Usuario } from "./entities/usuario.entities";
import { Detector } from "./entities/detector.entities";
import { Frame } from "./entities/frame.entities";
import { ListFrame } from "./entities/listFrame.entities";
// import { default1713748550556 } from "./migrations/1713748550556-default";
import { default1720803151273 } from "./migrations/1720803151273-default"




const port = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Usuario, Detector, Frame, ListFrame],
  migrations: [ default1720803151273],
  subscribers: []
});

AppDataSource.initialize()