import axios from "axios";
import { base_url, getConfig } from "../../utils/axiosConfig";

const register = async (userData) => {
  console.log("register Req: ", userData);
  
  try {
    // Sending request with withCredentials to include cookies or authentication headers
    const response = await axios.post(
      `${base_url}user/register`,
      userData,
      { withCredentials: true } // Ensure credentials (cookies) are sent with the request
    );
    
    console.log("register Response: ", response);

    // If the response has data, return it
    if (response?.data) {
      return response.data;
    }

  } catch (error) {
    console.error("Error during registration: ", error);
    return { error: true, message: error.response?.data?.message || error.message };
  }
};

const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  if (response?.data) {
    localStorage.getItem("customer", JSON.stringify(response.data));
    return response.data;
  }
};

const getuserWishlist = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, getConfig());
  if (response.data) {
    return response.data;
  }
};
const addToCart = async (cartData) => {
  const response = await axios.post(`${base_url}user/add-to-cart`, cartData, getConfig());
  if (response.data) {
    return response.data;
  }
};
const getCart = async () => {
  const response = await axios.get(`${base_url}user/cart`, getConfig());
  if (response.data) {
    return response.data;
  }
};
const getOrders = async () => {
  const response = await axios.get(`${base_url}user/getmyorders`, getConfig());
  console.log("getorderresponse:", response);
  if (response.data) {
    return response.data;
  }
};
const emptyCart = async () => {
  const response = await axios.delete(`${base_url}user/empty-cart`, getConfig());
  if (response.data) {
    return response.data;
  }
};
const removeProductFromCart = async (cartItemId) => {
  const response = await axios.delete(
    `${base_url}user/delete-product-cart/${cartItemId}`,
    getConfig()
  );
  if (response.data) {
    return response.data;
  }
};
const forgotPassToken = async (data) => {
  const response = await axios.post(`${base_url}user/forgotPassword`, data);
  if (response.data) {
    return response.data;
  }
};

const resetPass = async (data) => {
  const response = await axios.put(`${base_url}user/resetPassword`, data);
  if (response.data) {
    return response.data;
  }
};
const updateUser = async (data) => {
  const response = await axios.put(
    `${base_url}user/edit-user`,
    data.data,
    getConfig()
  );

  if (response.data) {
    return response.data;
  }
};
const createOrder = async (orderDeatail) => {
  const response = await axios.post(`${base_url}user/cart/create-order`, orderDeatail,getConfig());
  if (response.data) {
    return response.data;
  }
};
export const authService = {
  register,
  login,
  getuserWishlist,
  addToCart,
  getCart,
  forgotPassToken,
  getOrders,
  resetPass,
  removeProductFromCart,
  updateUser,
  emptyCart,
  createOrder
};
