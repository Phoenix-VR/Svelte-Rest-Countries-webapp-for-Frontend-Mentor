import { writable,derived } from 'svelte/store';

export const countries = writable([]);

export const countriesData = derived(countries, ($countries) => {
    if ($countries)
      return $countries;
    
    }
)
export const filterStore = writable([]);

export const filteredData = derived(filterStore, ($filters) => {
    if ($filters)
      return $filters;
    
    }
)
export const loading = derived(countries, ($countries) => {
    if ($countries[0]!=undefined){
        return false
    }
    else{
        return true
    }
}

    )