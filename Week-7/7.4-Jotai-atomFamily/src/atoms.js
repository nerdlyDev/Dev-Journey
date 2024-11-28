// atoms.js
import { atom } from "jotai";
import { atomFamily } from "jotai/utils";

export const counterFamily = atomFamily((id) => atom(0)); // Each ID gets its own atom
