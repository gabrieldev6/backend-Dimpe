import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Usuario } from "./entities/usuario.entities";
import { Detector } from "./entities/detector.entities";
import { Frame } from "./entities/frame.entities";
import { ListFrame } from "./entities/listFrame.entities";
import { default1711309420516 } from "./migrations/1711309420516-default";




const port = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Usuario, Detector, Frame, ListFrame],
  migrations: [default1711309420516],
  subscribers: []
});

AppDataSource.initialize()