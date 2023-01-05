import axios from 'axios';
import { useEffect } from 'react';
import { URL_BASE } from '../constants/url';

export default function TimelinePage(params) {
	useEffect(() => {
		axios
			.get(`${URL_BASE}/posts`)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.data);
			});
	}, []);
}
