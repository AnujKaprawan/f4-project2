// App.js

import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Post from './Components/Post';
import Loader from './Components/Loader'; // Import the loader component
import { Route, Routes } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(false);

  // Event handler for the lookup button
  const handleLookup = async () => {
    try {
      // Set loading state to true before fetching data
      setLoading(true);

      // Simulate API call with setTimeout
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Set loading state to false after data has been fetched
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home handleLookup={handleLookup} />} />
        <Route path='/post/:pincode' element={<Post />} />
      </Routes>
      {loading && <Loader />} {/* Conditionally render the loader */}
    </div>
  );
}

export default App;
