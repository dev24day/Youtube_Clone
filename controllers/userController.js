import { videos } from "../db.js";
import routes from "../routes.js";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  console.log(req.body);
  console.log(res.body);
  const {
    body: { fullName, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    res.redirect(routes.home);
  }
};

export const login = (req, res) => res.render("login", { pageTitle: "Login" });

export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });

export const user_detail = (req, res) =>
  res.render("user_detail", { pageTitle: "User_detail" });

export const edit_profile = (req, res) =>
  res.render("edit_profile", { pageTitle: "Edit_profile" });

export const change_password = (req, res) =>
  res.render("change_password", { pageTitle: "Change_password" });
