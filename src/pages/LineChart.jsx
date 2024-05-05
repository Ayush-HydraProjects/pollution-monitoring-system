import process from 'process';
import React, { useEffect, useState } from 'react';

// import { DatePicker } from 'antd';
// import dayjs from 'dayjs';
import { useSearchParams } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { fetchData } from '../components/Email';
// import { useStateContext } from '../contexts/ContextProvider';
import { locLatLon } from '../data/staticData';
import AccordionCustom from '../components/AccordionCustom';

// const { RangePicker } = DatePicker;

/**
 * LineChart.jsx
 *
 * This is a React component that displays a line chart of air pollution data.
 *
 * Dependencies:
 * - React
 * - @mui/material
 * - @mui/system
 * - react-router-dom
 *
 * State Variables:
 * - latLon: Stores the latitude and longitude of the location.
 * - dataSets: Stores the pollution data sets.
 * - xAxisData: Stores the data for the x-axis of the chart.
 * - yAxisData: Stores the data for the y-axis of the chart.
 * - maxDate: Stores the maximum date for the data.
 * - dates: Stores the start and end dates for the data.
 * - isExpanded: Stores the state of the accordion elements in the UI.
 *
 * Functions:
 * - handleChangeExpanded: Handles the expansion and collapse of the accordion elements.
 * - handleResponse: Handles the response from the fetch request to the API.
 * - getYAxisData: Returns the y-axis data for the chart.
 *
 * useEffect Hooks:
 * - The first useEffect hook sets the latitude and longitude based on the location search parameter.
 * - The second useEffect hook fetches the pollution data from the API.
 * - The third useEffect hook handles the response from the API and sets the data sets.
 * - The fourth useEffect hook sets the y-axis data for the chart.
 * - The fifth useEffect hook sets the x-axis data for the chart.
 *
 * Component Return:
 * - The component returns a div element that contains a Box component and a map of AccordionCustom components.
 * - Each AccordionCustom component displays a line chart of the pollution data for a specific pollutant.
 */

const LineChart = () => {
  // const { currentMode } = useStateContext();
  let [searchParams, setSearchParams] = useSearchParams();

  const [latLon, setLatLon] = useState();
  const [dataSets, setDatasets] = useState({});
  const [xAxisData, setXAxisData] = useState();
  const [yAxisData, setYAxisData] = useState({});
  const [maxDate, setMaxDate] = useState('');
  const [dates, setDates] = useState({
    start: Math.ceil(
      new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).getTime() / 1000
    ),
    end: Math.ceil(new Date().getTime() / 1000),
  });
  const [isExpanded, setIsExpanded] = useState({
    'PM2.5': true,
    PM10: true,
    O3: true,
    NO2: true,
    NH3: true,
    SO2: true,
  });

  const handleChangeExpanded = (panel) => () => {
    setIsExpanded((prevState) => {
      return {
        ...prevState,
        [panel]: !prevState[panel],
      };
    });
  };

  useEffect(() => {
    const cityName = searchParams.get('location');
    if (cityName) {
      setLatLon({ ...locLatLon[cityName], cityName });
    } else {
      setLatLon({ lat: 50.8476, lon: 4.3572, cityName: 'Brussels' });
    }

    const afterFourDays = new Date();
    afterFourDays.setDate(afterFourDays.getDate() + 4);
    const formattedDate = afterFourDays.toISOString().split('T')[0];
    setMaxDate(formattedDate);
  }, [searchParams]);

  useEffect(() => {
    const fetchData = async () => {
      if (latLon?.lat && latLon?.lon) {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/air_pollution/history?lat=${latLon?.lat}&lon=${latLon?.lon}&start=${dates?.start}&end=${dates?.end}&appid=${process.env.REACT_APP_KEY}`
        );
        const responseData = await response.json();
        // setData(responseData);
        handleResponse(responseData);
      }
    };
    // fetchData();
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
    const url = {
      Brussels:
        'https://api.thingspeak.com/channels/2493571/feeds.json?results=20',
      Ghent:
        'https://api.thingspeak.com/channels/2497529/feeds.json?results=20',
    };
    fetchData(url[latLon?.cityName], latLon?.cityName);
  }, [dataSets, latLon?.cityName]);

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

  // const handleDates = (e) => {
  //   setDates({
  //     start: Math.floor(dayjs(e?.$d).startOf('day').valueOf() / 1000),
  //     end: Math.floor(dayjs(e?.$d).endOf('day').valueOf() / 1000),
  //   });
  // };

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

  const pollutantList = [
    {
      name: 'PM2.5',
      lampId: {
        Brussels: '831394',
        Ghent: '832833',
      },
      graphId: 1,
    },
    {
      name: 'PM10',
      lampId: {
        Brussels: '832844',
        Ghent: '832836',
      },
      graphId: 2,
    },
    {
      name: 'O3',
      lampId: {
        Brussels: '832846',
        Ghent: '832854',
      },
      graphId: 3,
    },
    {
      name: 'NO2',
      lampId: {
        Brussels: '832845',
        Ghent: '832855',
      },
      graphId: 4,
    },
    {
      name: 'NH3',
      lampId: {
        Brussels: '832847',
        Ghent: '832856',
      },
      graphId: 5,
    },
    {
      name: 'SO2',
      lampId: {
        Brussels: '832848',
        Ghent: '832857',
      },
      graphId: 6,
    },
  ];

  const channelId = {
    Brussels: 2493571,
    Ghent: 2497529,
  };

  // const dateFormat = 'YYYY-MM-DD';
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: {
            xl: '80%',
            lg: '100%',
          },
        }}
        pb={2}
      >
        <Typography variant='h5' width={'25%'} sx={{ fontWeigh: 500 }}>
          {/* Air Pollution Chart */}
        </Typography>
        <Typography variant='h5'>
          <b>{latLon?.cityName}</b>
        </Typography>
        <Typography width={'25%'} />
        {/* <DatePicker
          // defaultValue={dayjs('2019-09-03', dateFormat)}
          minDate={dayjs('2023-01-01', dateFormat)}
          maxDate={dayjs(maxDate, dateFormat)}
          onChange={handleDates}
        /> */}
      </Box>
      {/* <Grid container columns={2}>
        {element?.length > 0 &&
          element?.map((name) => {
            return (
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
            );
          })}
      </Grid> */}

      {pollutantList.map((pollutant, index) => {
        return (
          <AccordionCustom
            title={
              <Typography fontSize={'20px'} fontWeight={500}>
                {pollutant?.name}
              </Typography>
            }
            expanded={isExpanded?.[pollutant?.name]}
            // handleChange={handleChangeExpanded(pollutant?.name)}
            sx={{
              '& .MuiAccordionSummary-root': {
                background: '#ececec',
                borderRadius: '0.5rem',
              },
              '& .MuiAccordionSummary-content': {
                display: 'flex',
                justifyContent: 'center',
              },
              width: {
                xl: '90%',
                lg: '100%',
              },
            }}
          >
            <Grid container key={pollutant.lampId[latLon?.cityName]} my={4}>
              <Grid
                item
                lg={6}
                md={12}
                xs={6}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  pb: {
                    xs: 2,
                    lg: 0,
                  },
                }}
              >
                <iframe
                  title={`Pollution Chart ${pollutant?.graphId}`}
                  className='max-w-md mx-auto border rounded-lg shadow-lg relative overflow-hidden w-full'
                  width={450}
                  height={260}
                  src={`https://thingspeak.com/channels/${
                    channelId[latLon?.cityName]
                  }/charts/${
                    pollutant?.graphId
                  }?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=5&title=${
                    pollutant?.name
                  }&type=line&xaxis=Time&yaxis=%C2%B5g%2Fm3`}
                ></iframe>
              </Grid>
              <Grid
                item
                lg={6}
                md={12}
                xs={6}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  pb: {
                    xs: 2,
                    lg: 0,
                  },
                }}
              >
                <iframe
                  title={`Pollution Chart ${pollutant?.graphId}`}
                  width={450}
                  height={260}
                  className='border rounded-lg shadow-lg'
                  // style='border: 1px solid #cccccc;'
                  src={`https://thingspeak.com/channels/${
                    channelId[latLon?.cityName]
                  }/widgets/${pollutant.lampId[latLon?.cityName]}`}
                ></iframe>
              </Grid>
            </Grid>
          </AccordionCustom>
        );
      })}
    </div>
  );
};

export default LineChart;
