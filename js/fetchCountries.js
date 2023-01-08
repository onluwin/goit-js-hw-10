const BASE_URL = 'https://restcountries.com/v3.1/name/'
const OPTIONS = 'fields=name,capital,population,flags,languages'

import { createMarkup , addMarkupToPage } from '../js/createMarkup';

export function fetchCountries(name) {
    return fetch(`${BASE_URL}/${name}?${OPTIONS}`).then(response => {
        if (!response.ok) {
            throw new Error(error.status)
        }

        return response.json();
    }).catch(error => console.log)
}

export function onFetchSuccess(data, markup) {
    markup = createMarkup(data)
    addMarkupToPage(markup)
}