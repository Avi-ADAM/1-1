import { writable } from "svelte/store";

export const fpval = writable();

export const updateEmail = () => {
    fpval.set()
}