/**********************   service_2   **********************/

import api from '../index';
const service = "service_2";
export const say = (name) => {
  return api.invoke(service, 'say', [name])
}
export default {
  say
}

