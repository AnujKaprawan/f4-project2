import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import PostContext from "../context/PostContext";

const Home = () => {
  const [pincode, setPincode] = useState("");
  const navigate = useNavigate();

  function handleError() {
    alert("Enter valid Pincode");
  }

  return (
    <div className="home">
      <h2>Enter Pincode</h2>
      <input
        type="text"
        placeholder="Pincode"
        name="pincode"
        id="pincode"
        value={pincode}
        onChange={(e) => {
          setPincode(e.target.value);
        }}
      />
      <br />
      {pincode ? (
        <button
          onClick={() => {
            navigate(`/post/${pincode}`);
          }}
          id="btn"
        >
          Lookup
        </button>
      ) : (
        <button id="btn" onClick={handleError}>
          Lookup
        </button>
      )}
    </div>
  );
};

export default Home;