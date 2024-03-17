import React, { useEffect, useState } from 'react';
import process from 'process';

import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { useSearchParams } from 'react-router-dom';

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
} from '@syncfusion/ej2-react-charts';
// import LineGraph from '../components/Charts/LineGraph';
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from '../data/mcphs';
// import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Box, Typography } from '@mui/material';
import { locLatLon } from '../data/dummy';

// const { RangePicker } = DatePicker;

const LineChart = () => {
  const { currentMode } = useStateContext();
  let [searchParams, setSearchParams] = useSearchParams();

  const [latLon, setLatLon] = useState();
  const [dataSets, setDatasets] = useState({});
  const [xAxisData, setXAxisData] = useState();
  const [yAxisData, setYAxisData] = useState({});
  const [dates, setDates] = useState({
    start: Math.ceil(
      new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).getTime() / 1000
    ),
    end: Math.ceil(new Date().getTime() / 1000),
  });

  // const API_KEY = 'd60258cd8688bb5e13fccaf09ca396ea';

  useEffect(() => {
    const cityName = searchParams.get('location');
    if (cityName) {
      setLatLon({ ...locLatLon[cityName], cityName });
    } else {
      setLatLon({ lat: 50.8476, lon: 4.3572, cityName: 'Brussels' });
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchData = async () => {
      if (latLon?.lat && latLon?.lon) {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${latLon?.lat}&lon=${latLon?.lon}&start=${dates?.start}&end=${dates?.end}&appid=${process.env.REACT_APP_KEY}`
        );
        const responseData = await response.json();
        // setData(responseData);
        handleResponse(responseData);
      }
    };
    fetchData();
  }, [dates, latLon?.lat, latLon?.lon]);

  const handleResponse = (data) => {
    const factor = {
      co: [],
      no: [],
      no2: [],
      o3: [],
      so2: [],
      nh3: [],
    };

    if (data?.list?.length > 0) {
      for (const { components, dt } of data?.list) {
        for (const ele in components) {
          if (ele === 'pm2_5' || ele === 'pm10') continue;
          factor[ele] = [
            ...factor?.[ele],
            { x: new Date(dt * 1000), y: components?.[ele] },
          ];
        }
      }
    }
    setDatasets(factor);
  };

  useEffect(() => {
    const yData = {
      co: {},
      no: {},
      no2: {},
      o3: {},
      so2: {},
      nh3: {},
    };
    Object.keys(dataSets)?.length > 0 &&
      Object.keys(dataSets).forEach((data) => {
        const min = Math.min(...dataSets[data].map((item) => item.y));
        const max = Math.max(...dataSets[data].map((item) => item.y));
        yData[data] = getYAxisData({ min, max });
      });
    setYAxisData(yData);
  }, [dataSets]);

  const getYAxisData = ({ min, max }) => {
    return {
      labelFormat: '{value}',
      rangePadding: 'None',
      minimum: Math.floor(min),
      maximum: Math.ceil(max),
      interval: Math.ceil((max - min) / 10),
      lineStyle: { width: 0 },
      majorTickLines: { width: 0 },
      minorTickLines: { width: 0 },
      title: 'μg/m3',
    };
  };

  const handleDates = (e) => {
    setDates({
      start: Math.floor(dayjs(e?.$d).startOf('day').valueOf() / 1000),
      end: Math.floor(dayjs(e?.$d).endOf('day').valueOf() / 1000),
    });
  };

  useEffect(() => {
    setXAxisData({
      valueType: 'DateTime',
      labelFormat: 'h',
      intervalType: 'Hours',
      interval: 1,
      edgeLabelPlacement: 'Shift',
      minimum: new Date(dates.start * 1000),
      maximum: new Date(dates.end * 1000),
      majorGridLines: { width: 0 },
      background: 'white',
      title: 'Time (Hours)',
    });
  }, [dates]);

  const element = ['co', 'nh3', 'no', 'no2', 'o3', 'so2'];
  const dateFormat = 'YYYY-MM-DD';
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h5' sx={{ fontWeigh: 500 }}>
          Air Pollution Chart
        </Typography>
        <Typography variant='h5'>{latLon?.cityName}</Typography>
        <DatePicker
          // defaultValue={dayjs('2019-09-03', dateFormat)}
          minDate={dayjs('2023-01-01', dateFormat)}
          maxDate={dayjs('2024-03-20', dateFormat)}
          onChange={handleDates}
        />
      </Box>
      <Grid container columns={2}>
        {element?.length > 0 &&
          element?.map((name) => (
            <Grid key={name}>
              <ChartComponent
                id={`line-chart-${name}`}
                height='420px'
                width='50%'
                primaryXAxis={xAxisData}
                primaryYAxis={yAxisData?.[name]}
                title={name.toUpperCase()}
                chartArea={{ border: { width: 0 } }}
                tooltip={{ enable: true }}
                background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                legendSettings={{ background: 'white' }}
              >
                <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
                <SeriesCollectionDirective>
                  {[
                    {
                      dataSource: dataSets?.[name],
                      xName: 'x',
                      yName: 'y',
                      name: name.toUpperCase(),
                      width: '2',
                      marker: { visible: true, width: 10, height: 10 },
                      type: 'Line',
                    },
                  ].map((item, index) => {
                    return <SeriesDirective key={index} {...item} />;
                  })}
                </SeriesCollectionDirective>
              </ChartComponent>
            </Grid>
          ))}
        {/* <Grid>
          <ChartComponent
            id='line-chart-no'
            height='420px'
            width='50%'
            primaryXAxis={LinePrimaryXAxis}
            primaryYAxis={LinePrimaryYAxis}
            title='Air Pollution Chart'
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            legendSettings={{ background: 'white' }}
          >
            <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
            <SeriesCollectionDirective>
              {lineCustomSeries.map((item, index) => {
                return <SeriesDirective key={index} {...item} />;
              })}
            </SeriesCollectionDirective>
          </ChartComponent>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default LineChart;
