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
