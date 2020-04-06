/**********************   order_service   **********************/

import api from '../index';
const service = "order_service";
export const get_by_id = (id) => {
  return api.invoke(service, 'get_by_id', [id])
}
export default {
  get_by_id
}

