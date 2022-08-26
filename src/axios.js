import axios from "axios";

/* Base url that makes requests to the movie database*/
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

//  ---  instance.get("/foo-bar");  --->> GET https://api.themoviedb.org/3/foo-bar

export default instance;
