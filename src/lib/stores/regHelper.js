import { writable } from 'svelte/store';

export const regHelper = writable(0);



export const updateRegHelper = () => {
    // a writable store has a `set` method to change its value
    regHelper.set()
}
