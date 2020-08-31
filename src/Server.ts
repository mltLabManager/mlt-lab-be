import cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import express from "express";
import logger from "morgan";
import path from "path";
import BaseRouter from "./routes/index";
import cors = require("cors");
import PostgresConnection from "./dal/PostgresConnection";
import methodOverride = require("method-override");
import helmet from "helmet";
import ComputerDataRoute from "./routes/ComputerDataRoute";
import ComputerHistoryRoute from "./routes/ComputerHistoryRoute";
import SystemDataRoute from "./routes/SystemDataRoute";
import ParametersRouter from "./routes/ParametersRoute";
import UserRoute from "./routes/UserRoute";
const buildDAOFactory = async () => {
  let postgresConnection: PostgresConnection = new PostgresConnection();

  try {
    await postgresConnection.setup();
    return null;
  } catch (e) {
    throw e;
  }
};

// Init express
const app = express();

// Add middleware/settings/routes to express.
// app.use(cors());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.disable("etag");
app.use(logger("dev"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(methodOverride());

buildDAOFactory().then(() => {
  routes();
});

/**
 * Create router
 *
 * @class Server
 * @method api
 */
const routes = () => {
  const router: express.Router = express.Router();
  const computerDataRouter: express.Router = express.Router();
  const computerHistoryRouter: express.Router = express.Router();
  const systemDataRouter: express.Router = express.Router();
  const parametersRoute: express.Router = express.Router();
  const UserRouter: express.Router = express.Router();

  ComputerDataRoute.create(computerDataRouter);
  ComputerHistoryRoute.create(computerHistoryRouter);
  SystemDataRoute.create(systemDataRouter);
  ParametersRouter.create(parametersRoute);
  UserRoute.create(UserRouter);

  // Use the client's default routing - static file
  const clientRoot = path.join(__dirname, "../", "build");
  app.use(express.static(clientRoot));
  router.get("*", function (req, res) {
    res.sendFile("index.html", { root: clientRoot });
  });

  app.use("/backend/", BaseRouter);
  app.use("/backend/user", UserRouter);
  app.use("/backend/computerData", computerDataRouter);
  app.use("/backend/systemData", systemDataRouter);
  app.use("/backend/parameters", parametersRoute);
};
export default app;
