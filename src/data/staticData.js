import React from 'react';
import { FaDatabase } from 'react-icons/fa6';
import { GiAbstract004, GiWaterMill } from 'react-icons/gi';

/**
 * staticData.js
 * 
 * This file contains static data used throughout the application.
 * 
 * Example Usage:
 * - Import the required data from this file into other components or modules.
 * - Use the exported data as needed for configuration, constants, or mock data.
 * 
 * Note:
 * - This file should not contain any dynamic or runtime-generated data.
 */

const sensorStatus = (props) => (
  <div className='flex gap-2 justify-center items-center text-gray-700 capitalize'>
    <p
      style={{ background: props.StatusBg }}
      className='rounded-full h-3 w-3'
    />
    <p>{props.Status}</p>
  </div>
);

export const barChartData = [
  [
    { x: 'USA', y: 46 },
    { x: 'GBR', y: 27 },
    { x: 'CHN', y: 26 },
  ],
  [
    { x: 'USA', y: 37 },
    { x: 'GBR', y: 23 },
    { x: 'CHN', y: 18 },
  ],
  [
    { x: 'USA', y: 38 },
    { x: 'GBR', y: 17 },
    { x: 'CHN', y: 26 },
  ],
];

export const colorMappingData = [
  [
    { x: 'Jan', y: 6.96 },
    { x: 'Feb', y: 8.9 },
    { x: 'Mar', y: 12 },
    { x: 'Apr', y: 17.5 },
    { x: 'May', y: 22.1 },
    { x: 'June', y: 25 },
    { x: 'July', y: 29.4 },
    { x: 'Aug', y: 29.6 },
    { x: 'Sep', y: 25.8 },
    { x: 'Oct', y: 21.1 },
    { x: 'Nov', y: 15.5 },
    { x: 'Dec', y: 9.9 },
  ],
  ['#FFFF99'],
  ['#FFA500'],
  ['#FF4040'],
];

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  // labelFormat: 'y',
  labelFormat: 'MMMM',
  intervalType: 'Months',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 10,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const sensorColumns = [
  // { type: 'checkbox', width: '50' },
  {
    field: 'SensorName',
    headerText: 'Sensor Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: sensorStatus,
  },
  {
    field: 'Type',
    headerText: 'Type',
    width: '100',
    format: 'C2',
    textAlign: 'Center',
  },

  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center',
  },
];

export const sensorList = [
  {
    SensorName: 'Sensor 1',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Type: 'Air',
    Location: 'Area 1',
  },
  {
    SensorName: 'Sensor 2',
    Status: 'Active',

    StatusBg: '#8BE78B',
    Type: 'Water',
    Location: 'Area 2',
  },
  {
    SensorName: 'Sensor 3',
    Status: 'In Service',
    StatusBg: '#FEC90F',
    Type: 'Water',
    Location: 'Area 3',
  },
  {
    SensorName: 'Sensor 4',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Type: 'Water',
    Location: 'Area 4',
  },
  {
    SensorName: 'Sensor 5',
    Status: 'Out of Order',

    StatusBg: 'red',
    Type: 'Air',
    Location: 'Area 5',
  },
];

export const links = [
  {
    title: '1',
    links: [
      {
        name: 'Sensor Data',
        path: 'PollutionDataTable',
        icon: <FaDatabase />,
      },
      // {
      //   name: 'SensorInformation',
      //   path: 'SensorInformation',
      //   icon: <IoMdInformationCircle />,
      // },
    ],
  },
  {
    title: '2',
    links: [
      {
        name: 'Air Pollution',
        path: 'AirPollutionChart',
        icon: <GiAbstract004 />,
      },
      // {
      //   name: 'Water Pollution',
      //   path: 'WaterPollutionChart',
      //   icon: <GiWaterMill />,
      // },
    ],
  },
];

//save
export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const sensorTableHeader = [
  {
    field: 'SensorName',
    headerText: 'Sensor ID',
    width: '150',
    // editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'left',
  },
];

export const locLatLon = {
  Brussels: { lat: 50.8467, lon: 4.3525 },
  Antwerp: { lat: 51.2178, lon: 4.4003 },
  Gent: { lat: 51.0536, lon: 3.7253 },
  Charleroi: { lat: 50.4, lon: 4.4333 },
  Anderlecht: { lat: 50.8333, lon: 4.3333 },
};

// save
export const sensorName = [
  {
    SensorName: 'PMS5001',
    Location: 'Brussels',
  },
  {
    SensorName: 'PMS5002',
    Location: 'Ghent',
  },
];
