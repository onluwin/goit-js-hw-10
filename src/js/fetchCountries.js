const BASE_URL = 'https://restcountries.com/v3.1/name/'
const OPTIONS = 'fields=name,capital,population,flags,languages'

export function fetchCountries(name) {
    return fetch(`${BASE_URL}/${name}?${OPTIONS}`).then(response => {
        if (!response.ok) {
            throw new Error(error.status)
        }

        return response.json();
    }).catch(error => console.log)
}
