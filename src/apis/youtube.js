import axios from 'axios';

const KEY = 'AIzaSyCKpj3lObukh6IVj66T0rVBOCZoUIfSIYM';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		key: KEY,
		maxResults: 5,
		part: 'snippet',
		type: 'video',
	},
});
