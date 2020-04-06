import api from '../index.js';

const service = "cn.colin.zhonggong.service.api.UserProvider";

export const save = (user) => {
	return api.invoke(service, 'save', [user])
}

export const findById = (id) => {
	return api.invoke(service, 'findById', [id])
}
