import { useNavigate } from "react-router-dom";
export default function Topbar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        border: "2px solid black",
        padding: 20,
        backgroundColor: "lightblue",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {/* Client side routing with react-router-dom */}
      {/* <button onClick= {() => {
            window.location.href = "/"; 
        }}> Landing Page</button> */}
      {/* This is not client side routing because here we are changing the url and re rendering the page and getting the index.html page again */}
      {/* In client side routing we fetches the index.html once and once it is fetched we navigate to the landing page */}

      {/* <button onClick={() => {
            window.location.href = "/dashboard";
        }}> Dashboard </button> */}

      {/*TODO: The right way of doing client side routing is by using react-router-dom's useNavigate hook*/}

      <button onClick={() => navigate("/")}>Landing Page</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
    </div>
  );
}
