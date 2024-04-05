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
