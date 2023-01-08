import '../css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries, onFetchSuccess } from '../js/fetchCountries';
import { refs } from '../js/refs'
import { createMarkup, resetMarkup, addMarkupToPage } from '../js/createMarkup';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';

const DEBOUNCE_DELAY = 300;

function onCountryInput(e) {
    let query = e.target.value.trim().toLowerCase()
    if (query === '') {
        Notify.failure('Oops, there is no country with that name.')
        resetMarkup()
        return;
    }
    let markup = ''
    fetchCountries(query).then(data => onFetchSuccess(data, markup));
}

const debouncedOnCountryInput = debounce(onCountryInput, DEBOUNCE_DELAY)

refs.countryInput.addEventListener('input', debouncedOnCountryInput);
