import { atom } from "jotai";

export const networkAtom = atom(108);
export const jobsAtom = atom(0);
export const messagingAtom = atom(22);
export const notificationsAtom = atom(0);

export const totalCountAtom = atom(
  (get) =>
    get(networkAtom) +
    get(jobsAtom) +
    get(messagingAtom) +
    get(notificationsAtom),
);
