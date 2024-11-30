import { atom } from "jotai";

// Atom for modal visibility
export const isModalOpenAtom = atom(false);

// Atom for filter type
export const filterAtom = atom("all"); // Options: "all", "completed", "pending"
