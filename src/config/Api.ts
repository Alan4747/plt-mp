import { create } from "apisauce";
const SERVER_URL = "https://my-json-server.typicode.com/benirvingplt/products/";
const api = create({
  baseURL: `${SERVER_URL}`,
  headers: {
    Accept: `application/json`,
  },
});

export default api;
