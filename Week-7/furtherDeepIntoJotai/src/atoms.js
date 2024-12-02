import { atom } from "jotai";
import { loadable } from "jotai/utils";

const asyncUserAtom = atom(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
});

export const loadableUserAtom = loadable(asyncUserAtom);
