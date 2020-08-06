import cookieParser from "cookie-parser";
import * as bodyParser from "body-parser";
import express, { Router } from "express";
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
// import IdentifierLineRouter from "./routes/IdentifierLineRoute";
import ParametersRouter from "./routes/ParametersRoute";
// import StorageLocationRoute from "./routes/StorageLocationRoute";

//For the connection
// import passport = require("passport")
// import passportAzureAd = require("passport-azure-ad")

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
app.use(cors());

// const BearerStrategy = passportAzureAd.BearerStrategy

// const credentials = {
// 	identityMetadata: process.env.IDENTITY_METADATA_AZURE_AD,
// 	clientID: process.env.CLIENT_ID_AZURE_AD,
// 	loggingNoPII: false,
// 	validateIssuer: false,
// 	allowHttpForRedirectUrl: true,
// }

// let authenticatedUserTokens: any[] = []

// // Authentication strategy of passport
// const authenticationStrategy = new BearerStrategy(credentials, (token, done) => {
// 	console.log("verifying the user")
// 	console.log(token.name, "was the token retreived")
// 	let currentUser = null

// 	let userToken = authenticatedUserTokens.find((user: any) => {
// 		currentUser = user
// 		user.sub === token.sub
// 	})

// 	if (!userToken) {
// 		authenticatedUserTokens.push(token)
// 		currentUser = token
// 		return done(null, token)
// 	}

// 	return done(null, currentUser, token)
// })

// passport.use(authenticationStrategy)

// app.use(passport.initialize())
// app.use(passport.session())

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
  const notificationRouter: express.Router = express.Router();
  const parametersRoute: express.Router = express.Router();
  const storageLocationRoute: express.Router = express.Router();

  ComputerDataRoute.create(computerDataRouter);
  ComputerHistoryRoute.create(computerHistoryRouter);
  SystemDataRoute.create(systemDataRouter);
  ParametersRouter.create(parametersRoute);
  // NotificationRoute.create(notificationRouter);
  // StorageLocationRoute.create(storageLocationRoute);

  // Use the client's default routing
  const clientRoot = path.join(__dirname, "../../client", "build");

  app.use(express.static(clientRoot));

  router.get("*", function (req, res) {
    res.sendFile("index.html", { root: clientRoot });
  });

  app.use("/", BaseRouter);
  app.use("/computerData", computerDataRouter);
  // app.use("/computerHistory", computerHistoryRouter);
  app.use("/systemData", systemDataRouter);
  // app.use("/notifications", notificationRouter);
  app.use("/parameters", parametersRoute);
  // app.use("/storagelocations", storageLocationRoute);
};
// Export express instance
export default app;
