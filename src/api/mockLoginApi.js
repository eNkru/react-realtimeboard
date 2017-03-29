import delay from "./delay";

class LoginApi {
  static login(username, password) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, delay);
    });
  }
}

export default LoginApi;
