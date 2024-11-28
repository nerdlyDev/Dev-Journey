import "./App.css";
import React, { Suspense } from "react";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <div>
      <h1>User Profiles</h1>
      <Suspense fallback={<p>Loading user...</p>}>
        <UserDetails id="1" />
        <UserDetails id="2" />
        <UserDetails id="3" />
      </Suspense>
    </div>
  );
}

export default App;
