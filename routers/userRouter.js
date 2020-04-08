import express from "express";
import routes from "../routes";
import {
  users,
  user_detail,
  edit_profile,
  change_password
} from "../controllers/userController";

const userRouter = express.Router();
userRouter.get(routes.users, (req, res) => users);
userRouter.get(routes.user_detail, (req, res) => user_detail);
userRouter.get(routes.edit_profile, (req, res) => edit_profile);
userRouter.get(routes.change_password, change_password);

export default userRouter;
