// we create this separate for the context api where we want to pass the count and setCount to the child component.

import { createContext } from "react";

export const CountContext = createContext({
  count: 0,
  setCount: () => {},
}); // this is the default value or a teleporter to teleport the value to the child component.
