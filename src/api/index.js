const baseURL = "http://127.0.0.1:5000/api/rpc"
export const invoke = (service, method, args) => {
	args = args || [];
	args = args.map(i => JSON.stringify(i));
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL, //仅为示例，并非真实接口地址。
			method: 'post',
			data: {
				service,
				method,
				args,
				token: '',
				rid: new Date().getTime(),
				timestamp: new Date().getTime(),
				sign: method
			},
			success: (res) => {
				if (res.statusCode != 200) {
					reject(res);
					return;
				}
				let data = res.data;
				if (data.status) {
					reject(data);
					return;
				}
				resolve(res.data.result);
			},
			fail: (res) => {
				reject(res)
			}
		});
	});
}

export default {
	invoke
}
