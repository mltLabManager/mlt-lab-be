import { createConnection, Connection } from "typeorm";
import "reflect-metadata";
import ComputerData from "./models/ComputerData";
import ComputerHistory from "./models/ComputerHistory";
import Parameters from "./models/Parameters";
import SystemData from "./models/SystemData";

class PostgresConnection {
  private connection: Connection;

  constructor() {}

  public async setup() {
    try {
      console.log(Boolean(process.env.DB_SSL));
      this.connection = await createConnection({
        type: "postgres",
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        ssl: Boolean(process.env.DB_SSL),
        synchronize: Boolean(process.env.DB_SYNC), //only true when editing one of the entities
        entities: [ComputerData, ComputerHistory, Parameters, SystemData],
        logging: Boolean(process.env.DB_LOGGING),
        schema: process.env.DB_SCHEME,
      });
    } catch (error) {
      console.log(error);
    }
  }

  public getConnection() {
    return this.connection;
  }
}

export default PostgresConnection;
