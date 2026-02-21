import { writable } from 'svelte/store';

export const userName = writable("");



export const updateName = () => {
    // a writable store has a `set` method to change its value
    userName.set()
}
