import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from '@syncfusion/ej2-react-grids';
import { sensorName, sensorTableHeader } from '../data/staticData';
import { Header } from '../components';
import { CircularProgress } from '@mui/material';

/**
 * PollutionTable.jsx
 * 
 * This is a React component that displays a table of pollution data.
 * 
 * Dependencies:
 * - React
 * - @mui/material
 * - react-router-dom
 * - @syncfusion/ej2-react-grids
 * 
 * State Variables:
 * - latLon: Stores the latitude and longitude of the location.
 * - isLoading: A boolean indicating whether the data is still loading.
 * 
 * Functions:
 * - handleColumnClick: Handles the event when a column in the table is clicked.
 * 
 * useEffect Hooks:
 * - The useEffect hook navigates to the AirPollutionChart component when a column is clicked.
 * 
 * Component Return:
 * - The component returns a div element that contains a Header component and a GridComponent.
 * - The GridComponent displays the pollution data in a table format.
 */

const PollutionTable = () => {
  let navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const handleColumnClick = (e) => {
    let path = `/AirPollutionChart?location=${e?.rowData?.Location}`;
    navigate(path);
    setLoading(true);
  };

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white ronded-3xl'>
      <Header title='Pollution Data Table' />
      {isLoading ? (
        <CircularProgress />
      ) : (
        <GridComponent
          id='gridcomp'
          dataSource={sensorName}
          recordClick={handleColumnClick}
          allowPaging
          allowSorting
          style={{
            maxWidth: '35vw',
          }}
        >
          <ColumnsDirective>
            {sensorTableHeader.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject
            services={[
              Resize,
              Sort,
              ContextMenu,
              Filter,
              Page,
              ExcelExport,
              Edit,
              PdfExport,
            ]}
          />
        </GridComponent>
      )}
    </div>
  );
};

export default PollutionTable;
