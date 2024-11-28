import React, { Suspense } from "react";
import { useAtom } from "jotai";
import { userFamily } from "../atoms";

function UserDetails({ id }) {
  const [user] = useAtom(userFamily(id)); // Dynamically fetch user data for the given ID

  return (
    <div>
      <h3>User Details</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;
