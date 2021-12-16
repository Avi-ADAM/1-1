import { writable} from 'svelte/store';

export const show = writable(0);


export const updateName = () => {
    // a writable store has a `set` method to change its value
    show.set()
}