import { Notify } from "notiflix"
import { refs } from "./refs"

export function createMarkup(data) {
    // console.log(data);
    let markup = '';

    if (!data.length) {
        Notify.failure("Oops, there is no country with that name")
        resetMarkup()
        return ''
    }

    if (data.length === 1) {
        data.map(item => {

            let languages = ''
            for (const key in item.languages) {
                languages += `${item.languages[key]}, `
            }
            const slicedLanguages = languages.slice(0, Number(languages.length - 2))
            
            markup += `<li class="item"><div class="country-name-container"><img witdh="50"; height="50" src="${item.flags.svg}" alt="" /><p class="country">${item.name.common}</p></div> <p class="capital">Capital: ${item.capital[0]}</p><p class="population">Population: ${item.population}</p><p class="languages">Languages: ${slicedLanguages}</p></li>`
        })
        return markup
    }
    if (data.length > 9) {
        Notify.info("Too many matches found. Please enter a more specific name.")
        return ''
    }
    
    data.map(item => {
        markup += `<li class="item">
        <img class="country-svg" width="25px" height="25px" src="${item.flags.svg}">
        <p class="country-name">${item.name.common}</p>
      </li>`
    })
    return markup
}

export function resetMarkup() {
    refs.countryList.innerHTML = '';
}

export function addMarkupToPage(markup) {
    refs.countryList.innerHTML = markup;
}