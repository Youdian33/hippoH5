/**********************   regist   **********************/

import api from '../index';
const service = "regist";
export const hello = (name) => {
  return api.invoke(service, 'hello', [name])
}
export default {
  hello
}

