export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.data.token) {
      
      return { Authorization: 'Bearer ' + user.data.token };
      // return { "x-auth-token": user.data.token};
    } else {
      return {};
    }
  }