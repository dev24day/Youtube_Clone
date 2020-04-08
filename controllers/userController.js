/*export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Logout");
export const users = (req, res) => res.send("users");
export const user_detail = (req, res) => res.send("user_detail");
export const edit_profile = (req, res) => res.send("edit_profile");
export const change_password = (req, res) => res.send("change_password");
*/
export const join = (req, res) => res.render("join");
//find template file name 'home.pug' from folder '/views' since I set view engine 'pug'
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.render("logout");
export const users = (req, res) => res.render("users");
export const user_detail = (req, res) => res.render("user_detail");
export const edit_profile = (req, res) => res.render("edit_profile");
export const change_password = (req, res) => res.render("change_password");