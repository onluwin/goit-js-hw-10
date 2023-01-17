const BASE_URL = 'https://restcountries.com/v3.1/name/'
const OPTIONS = 'fields=name,capital,population,flags,languages'

export async function fetchCountries(name) {
    const response = await fetch(`${BASE_URL}/${name}?${OPTIONS}`)
    if (!response.ok) {
        throw new Error(error.status)
    }
    return await response.json()
}
