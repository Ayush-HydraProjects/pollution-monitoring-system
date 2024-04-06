import React from 'react';
import { FeatureGroup, LayersControl, Map, TileLayer } from 'react-leaflet';
import HeatmapLayer from '../HeatMap/HeatmapLayer';
import { addressPoints } from '../HeatMap/realworld.10000.js';
import 'leaflet/dist/leaflet.css';

/**
 * MainMap.jsx
 * 
 * This React component renders a map with various layers, including a heatmap layer.
 * 
 * Dependencies:
 * - React
 * - react-leaflet
 * - leaflet-heatmap
 * 
 * Props:
 * - data: An array of data points (latitude, longitude, intensity) for the heatmap.
 * - radius: The radius of each heatmap point.
 * - maxZoom: The maximum zoom level at which the heatmap is visible.
 * - gradient: An array of colors representing the gradient for the heatmap.
 * 
 * Example Usage:
 * ```jsx
 * <MainMap
 *   data={heatmapData}
 *   radius={20}
 *   maxZoom={10}
 *   gradient={['#00ff00', '#ff0000']}
 * />
 * ```
 * 
 * Note:
 * - The `data` prop should be an array of objects with the following structure:
 *   { lat: number, lng: number, intensity: number }
 * - The `radius` prop determines the size of each heatmap point.
 * - The `maxZoom` prop controls the visibility of the heatmap at different zoom levels.
 * - The `gradient` prop defines the color gradient for the heatmap.
 */

const position = [50.8476, 4.3572];

const mapType = [
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
];

const Maps = (props) => {


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
        </LayersControl>
      </Map>
    </div>
  );
};

export default Maps;
