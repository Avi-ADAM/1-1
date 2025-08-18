import { writable } from "svelte/store";


export const liUN = writable();



export const updateliUN = () => {
    // a writable store has a `set` method to change its value
    liUN.set()
}

