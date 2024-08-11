import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Usuario } from "./entities/usuario.entities";
import { Detector } from "./entities/detector.entities";
import { Frame } from "./entities/frame.entities";
import { ListFrame } from "./entities/listFrame.entities";
import { users1721331357287 } from "./migrations/1721331357287-users"
import { detector1721348946407 } from "./migrations/1721348946407-detector"
import { frame1721349662668 } from "./migrations/1721349662668-frame"
import { listFrame1721350053848 } from "./migrations/1721350053848-listFrame"

const port = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Usuario, Detector, Frame, ListFrame],
  migrations: [ users1721331357287, listFrame1721350053848, frame1721349662668, detector1721348946407 ], //,
  subscribers: [],
  logging: true,
  logger: 'advanced-console'
});

AppDataSource.initialize()