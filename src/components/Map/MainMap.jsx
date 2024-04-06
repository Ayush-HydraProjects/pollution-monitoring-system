import React from 'react';
import { FeatureGroup, LayersControl, Map, TileLayer } from 'react-leaflet';
import HeatmapLayer from '../HeatMap/HeatmapLayer';
import { addressPoints } from '../HeatMap/realworld.10000.js';
import 'leaflet/dist/leaflet.css';

const position = [50.8476, 4.3572];

const mapType = [
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
];

const Maps = (props) => {
  // function for generating lat-long for surrounding area
  // const getLatLong = () => {
  //   function generateDataPoint(baseLat, baseLong, identifierPrefix, offsetRange) {
  //     const latOffset = Math.random() * offsetRange - offsetRange / 2;
  //     const longOffset = Math.random() * offsetRange - offsetRange / 2;
  //     const newLat = baseLat + latOffset;
  //     const newLong = baseLong + longOffset;
  //     const newIdentifier = identifierPrefix + (Math.floor(Math.random() * 10000) + 10000); // Add 10000 to avoid overlap with existing IDs
  //     return [newLat.toFixed(5), newLong.toFixed(5), newIdentifier];
  //   }
  // }

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        paddingTop: '30px',
      }}
    >
      <Map
        center={position}
        zoom={6}
        zoomControl={true}
        style={{ width: '100%', height: '100%' }}
      >
        <LayersControl>
          <LayersControl.BaseLayer name='Base' checked>
            <TileLayer url={mapType[0]} />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay name='Heatmap' checked>
            <FeatureGroup color='purple'>
              <HeatmapLayer
                fitBoundsOnLoad
                fitBoundsOnUpdate
                points={addressPoints}
                longitudeExtractor={(m) => m[1]}
                latitudeExtractor={(m) => m[0]}
                intensityExtractor={(m) => parseFloat(m[2])}
              />
            </FeatureGroup>
          </LayersControl.Overlay>
          {/* <LayersControl.Overlay name='Marker'>
            <FeatureGroup color='purple'>
              <Marker position={position}>
                <Popup></Popup>
              </Marker>
            </FeatureGroup>
          </LayersControl.Overlay> */}
        </LayersControl>
      </Map>
    </div>
  );
};

export default Maps;
