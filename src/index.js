import '../css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs'
import { createMarkup, resetMarkup, addMarkupToPage } from './js/createMarkup';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

function onCountryInput(e) {
    let query = e.target.value.trim().toLowerCase()
    if (query === '') {
        resetMarkup()
        return;
    }
    let markup = ''
    fetchCountries(query).then(data => onFetchSuccess(data, markup)).catch(e=>console.log);
}

function onFetchSuccess(data, markup) {
    // console.log(data);
    markup = createMarkup(data)
    addMarkupToPage(markup)
}

const debouncedOnCountryInput = debounce(onCountryInput, DEBOUNCE_DELAY)

refs.countryInput.addEventListener('input', debouncedOnCountryInput);
