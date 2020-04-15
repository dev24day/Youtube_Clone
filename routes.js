//Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//Users
const USERS = "/users";
const USER_DETAIL = "/:id"; // "id" => text ":id" => variable
const EDIT_PROFILE = "/:id/edit_profile";
const CHANGE_PASSWORD = "/:id/change_password";

//Videos
const VIDEOS = "/videos";
const UPLOAD = "/:id/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit_video";
const DELETE_VIDEO = "/:id/delete_video";

//Obj
const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  user_detail: id => {
    if (id) {
      return `/${id}`;
    } else {
      return USER_DETAIL;
    }
  },

  edit_profile: id => {
    if (id) {
      return `/${id}/edit_video`;
    } else {
      return EDIT_PROFILE;
    }
  },
  change_password: id => {
    if (id) {
      return `/${id}/change_password`;
    } else {
      return CHANGE_PASSWORD;
    }
  },
  videos: VIDEOS,
  upload: id => {
    if (id) {
      return `/${id}/upload`;
    } else {
      return UPLOAD;
    }
  },
  video_detail: VIDEO_DETAIL,
  edit_video: EDIT_VIDEO,
  delete_video: DELETE_VIDEO
};
export default routes;
