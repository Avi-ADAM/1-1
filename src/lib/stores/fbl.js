import { writable } from 'svelte/store';

export const fbl = writable(true);

export const updateFbl = () => {
  // a writable store has a `set` method to change its value
  fbl.set();
};
