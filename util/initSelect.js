import { select } from '../elements.js';
import { queryFetch } from './queryFetch.js';

export function initSelect() {
	queryFetch(`{
		continents{
			name
			code
		}
	}`)
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			for (const con of res.data.continents) {
				const optionEl = document.createElement('option');
				optionEl.value = con.code;
				optionEl.innerText = con.name;
				select.appendChild(optionEl);
			}
		});
}
