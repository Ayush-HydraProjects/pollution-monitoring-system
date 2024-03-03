import React from 'react'


const Home = () => {
  const location = {
    lat: 37.7749, // Latitude of the location
    lng: -122.4194 // Longitude of the location
  };

  const zoomLevel = 12; // Zoom level of the map

  return (
    <div className="app">
      <h1>Google Map Example</h1>
      <Map location={location} zoomLevel={zoomLevel} />
    </div>
  );
}

export default Home;