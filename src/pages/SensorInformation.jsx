import React from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from '@syncfusion/ej2-react-grids';

import { sensorList, sensorColumns } from '../data/staticData';
import { Header } from '../components';

/**
 * SensorInformation.jsx
 * 
 * This is a React component that displays a table of sensor information.
 * 
 * Dependencies:
 * - React
 * - @syncfusion/ej2-react-grids
 * - @mui/material
 * 
 * State Variables:
 * - None
 * 
 * Functions:
 * - None
 * 
 * Component Return:
 * - The component returns a div element that contains a Header component and a GridComponent.
 * - The GridComponent displays the sensor information in a table format.
 * 
 * Example Usage:
 * ```jsx
 * <SensorInformation />
 * ```
 * 
 * Note:
 * - The sensor information is imported from a static data file.
 * - The GridComponent from @syncfusion/ej2-react-grids is used to display the data in a table format.
 * - The Header component is used to display a title above the table.
 */

const SensorInformation = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white ronded-3xl'>
      <Header title='Sensor Information' />
      <GridComponent
        dataSource={sensorList}
        allowPaging
        allowSorting
        // toolbar={['Delete']}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width='auto'
      >
        <ColumnsDirective>
          {sensorColumns.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default SensorInformation;
