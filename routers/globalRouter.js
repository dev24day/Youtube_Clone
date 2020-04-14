import express from "express";
import routes from "../routes";
import { search } from "../controllers/videoController";
import {
  home,
  getJoin,
  postJoin,
  login,
  logout
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.post(routes.join, postJoin);
globalRouter.get(routes.join, getJoin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
