import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader"; // Import the loader component

const Home = () => {
  const [pincode, setPincode] = useState("");
  const [loading, setLoading] = useState(false); // State for loading
  const navigate = useNavigate();

  function handleError() {
    alert("Enter valid Pincode");
  }

  // Event handler for the lookup button
  const handleLookup = () => {
    if (!pincode) {
      handleError();
      return;
    }

    // Set loading state to true before navigating
    setLoading(true);

    // Navigate to the post page after a short delay (simulating API call)
    setTimeout(() => {
      navigate(`/post/${pincode}`);
      // Set loading state to false after navigation
      setLoading(false);
    }, 2000); // Adjust timeout as needed
  };

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
      {/* Conditional rendering of the loader */}
      {loading ? (
        <Loader />
      ) : (
        <button id="btn" onClick={handleLookup}>
          Lookup
        </button>
      )}
    </div>
  );
};

export default Home;
