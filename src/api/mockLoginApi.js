import delay from "./delay";

const users = [
  {
    "user_id": 1,
    "username": "demo",
    "password": "demo"
  },
  {
    "user_id": 2,
    "username": "admin",
    "password": "admin"
  }
];

class LoginApi {
  static login(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const matchUser = findUser(username);
        if (matchUser.length > 0) {
          if (password === matchUser[0].password) {
            resolve(true);
          } else {
            resolve(false);
          }
        } else {
          reject(false);
        }
      }, delay);
    });
  }
}

function findUser(username) {
  return users.filter((user) => {
    return user.username === username;
  });
}

export default LoginApi;
