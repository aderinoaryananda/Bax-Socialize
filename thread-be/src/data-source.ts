import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/Users";
import { Thread } from "./entities/Thread";
import { Replies } from "./entities/Replies";
import { Likes } from "./entities/Likes";
import { Followers } from "./entities/Follows";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "roundhouse.proxy.rlwy.net",
  port: 17417,
  username: "postgres",
  password: "D*4a62CAa4FFd-gg*bedC5G5E*cDfggd",
  database: "railway",
  synchronize: true,
  logging: false,
  // entities: ["src/entities/*.ts"],
  entities: [User, Thread, Replies, Likes, Followers],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});
