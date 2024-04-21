import axios from "axios";
import { base_url, getConfig } from "../../utils/axiosConfig";

const getProducts = async (data) => {
  const url = `${base_url}product?${data?.brand?._id ? `brand=${data?.brand?._id}&&` : ""}
  ${data?.tag ? `tags=${data?.tag}&&` : ""}${
    data?.category?._id ? `category=${data?.category?._id}&&` : ""
  }${data?.minPrice ? `price[gte]=${data?.minPrice}&&` : ""}
  ${data?.maxPrice ? `price[lte]=${data?.maxPrice}&&` : ""}`;
  const response = await axios.get(url);
  if (response.data) {
    console.log(response.data)
    return response.data;
  }
};
const getSingleProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);
  if (response.data) {
    console.log(response.data)
    return response.data;
  }
};
const addToWishlist = async (proId) => {
  const response = await axios.post(
    `${base_url}product/wishlist`,
    { proId },
    getConfig()
  );
  if (response.data) {
    console.log(response.data)
    return response.data;
  }
};

export const productService = {
  getProducts,
  addToWishlist,
  getSingleProduct,
};
