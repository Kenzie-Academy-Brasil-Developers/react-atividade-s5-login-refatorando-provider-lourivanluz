import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-project-kenzie.herokuapp.com",
});
