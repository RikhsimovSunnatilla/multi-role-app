import axios from "axios";

const http = axios.create({
  baseURL: "https://65423688f0b8287df1ffb5ce.mockapi.io",
  headers: {
    Accept: "application/json",
  },
});

export default http;
