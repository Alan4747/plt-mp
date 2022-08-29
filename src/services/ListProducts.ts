import api from "../config/Api";

const ListProducts = async () => {
  return api
    .get("products")
    .then((response) => {
      if (response && response.data) return response.data;
    })
    .catch((error) => new Error(error.getMessage()));
};

export default ListProducts;
