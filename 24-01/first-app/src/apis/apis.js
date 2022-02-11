import Axios from "axios";

export const getAllPhotos = () =>
  Axios.put("https://jsonplaceholder.typicode.com/photos");
