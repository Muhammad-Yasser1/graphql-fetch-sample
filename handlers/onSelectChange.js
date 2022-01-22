import { queryFetch } from '../util/queryFetch.js';

export const onSelectChange = (e) => {
	queryFetch(
		`query getCountries ($code: ID!){
			continent (code: $code){
				countries{
					name      
				}
			}
		}`,
		{ code: e.target.value }
	)
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			document.querySelector('ul').innerHTML = '';
			for (const country of res.data.continent.countries) {
				document.querySelector(
					'ul'
				).innerHTML += `<li>${country.name}</li>`;
			}
		})
		.catch((err) => console.log(err));
};
