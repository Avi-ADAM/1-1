import { writable } from "svelte/store";

export const email = writable('');   

export const updateEmail = () => {
    // a writable store has a `set` method to change its value
    email.set()
}