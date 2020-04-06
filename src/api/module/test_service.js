/**********************   test_service   **********************/

import api from '../index';
const service = "test_service";
export const hello = (name) => {
  return api.invoke(service, 'hello', [name])
}
export default {
  hello
}

