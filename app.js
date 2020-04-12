import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

const app = express();

app.use(helmet());
app.set("view engine", "pug"); //set the view engine (default: undefined) to pug
//app.set("views", "news") // change the path
app.use(cookieParser()); // understand cookie from user to use session
app.use(bodyParser.json()); //access to request obj that has form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.home, globalRouter);

export default app;
