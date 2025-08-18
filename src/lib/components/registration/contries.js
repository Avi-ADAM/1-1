import { writable } from "svelte/store";

export const contriesi = writable();

export const updateContries = () => {
    contriesi.set()
}