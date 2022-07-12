import axios from "axios";

const API_URL = "http://44.201.153.46:8081/api/v1/auth";


const login = (email, password) => {
  return axios
    .post(API_URL + "/login/admin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data.token;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  login,
  logout,
  getCurrentUser,
};

export default authService;