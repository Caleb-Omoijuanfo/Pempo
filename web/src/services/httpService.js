import axios from 'axios';

const jwt = localStorage.getItem("token");

axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
axios.defaults.headers.common["Content-Type"] =
	"application/x-www-form-urlencoded";
	
const http = {
	post: axios.post,
	get: axios.get,
	put: axios.put,
	patch: axios.patch,
	delete: axios.delete
};

export default http;