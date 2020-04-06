/**********************   login_service   **********************/

import api from '../index';
const service = "login_service";
export const hello = (name) => {
  return api.invoke(service, 'hello', [name])
}
export default {
  hello
}

/**********************   user_service begin  **********************/

export const service = {
    login(username, password) =>     {
        return api.invoke('user_service', 'login', [username, password])
    },
    register(username, password) =>     {
        return api.invoke('user_service', 'register', [username, password])
    }

/**********************   user_service end  **********************/

export default {
  user_service
}



