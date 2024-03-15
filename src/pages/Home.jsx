import React from 'react';
import HeatMap from './HeatMap';
import MainMap from '../components/Map/MainMap';

const Home = () => {
  const location = {
    lat: 37.7749, // Latitude of the location
    lng: -122.4194, // Longitude of the location
  };

  const zoomLevel = 12; // Zoom level of the map

  return (
    <div className='app'>
      <MainMap />
      {/* <HeatMap /> */}
    </div>
  );
};

export default Home;
