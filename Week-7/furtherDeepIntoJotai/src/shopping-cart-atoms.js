import { atom } from "jotai";

export const cartAtom = atom([]);

export const totalAtom = atom((get) =>
  get(cartAtom).reduce((total, item) => total + item.price, 0),
);
