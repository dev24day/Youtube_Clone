import { videos } from "../db.js";
import routes from "../routes";

export const search = (req, res) => {
  const {
    query: { term: searchKeyword }
  } = req;
  res.render("search", { pageTitle: "Search", searchKeyword, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  //To Do : Upload & Save Video
  res.redirect(`/videos${routes.video_detail(324393)}`);
};

export const video_detail = (req, res) =>
  res.render("video_detail", { pageTitle: "Video_detail" });

export const edit_video = (req, res) =>
  res.render("edit_video", { pageTitle: "Edit_video" });

export const delete_video = (req, res) =>
  res.render("delete_video", { pageTitle: "Delete_video" });
