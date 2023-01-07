import '../css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from '../js/fetchCountries';
import { refs } from '../js/refs'
import { createMarkup } from '../js/createMarkup';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
// console.log(refs.countryInput);

function onCountryInput(e) {
    let query = e.target.value.trim().toLowerCase()
    if (query === '') {
        refs.countryList.innerHTML = ''
        return;
    }
    let markup = ''
    fetchCountries(query).then(data => {
        
        console.log(data);
        markup = createMarkup(data)
        // console.log(markup);
        refs.countryList.innerHTML = markup
    });
}


refs.countryInput.addEventListener('input', debounce(onCountryInput,DEBOUNCE_DELAY));


