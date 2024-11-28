import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import axios from "axios";

export const userFamily = atomFamily((id) =>
  atom(async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    return response.data;
  }),
);
