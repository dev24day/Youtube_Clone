import { videos } from "../db.js";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });

export const join = (req, res) => res.render("join", { pageTitle: "Join" });

export const login = (req, res) => res.render("login", { pageTitle: "Login" });

export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });

export const users = (req, res) => res.render("users", { pageTitle: "Users" });

export const user_detail = (req, res) =>
  res.render("user_detail", { pageTitle: "User_detail" });

export const edit_profile = (req, res) =>
  res.render("edit_profile", { pageTitle: "Edit_profile" });

export const change_password = (req, res) =>
  res.render("change_password", { pageTitle: "Change_password" });
