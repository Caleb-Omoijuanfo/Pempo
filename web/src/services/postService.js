import http from './httpService.js';

class PostService {	
	
	static fetchPosts = (start, length) => {	
		let baseUrl = process.env.REACT_APP_BASE_URL;	
		return http.get(`${baseUrl}/Post/FetchPost`, {
			params: {
				start: start,
				length: length
			}
		})
	};

	static fetchPost = (id) => {
		let baseUrl = process.env.REACT_APP_BASE_URL;
		return http.get(`${baseUrl}/Post/Fetch/One`, {
			params: {
				id: id	
			}
		});
	};
}

export default PostService;