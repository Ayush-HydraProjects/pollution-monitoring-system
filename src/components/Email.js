/**
 * Email.js
 * 
 * This file contains a React component for rendering an email form.
 * 
 * Dependencies:
 * - React
 * - @mui/material
 * 
 * Props:
 * - onSubmit: A callback function triggered when the form is submitted.
 * - onCancel: A callback function triggered when the user cancels the form.
 * 
 * Example Usage:
 * ```jsx
 * <EmailForm
 *   onSubmit={handleFormSubmit}
 *   onCancel={handleFormCancel}
 * />
 * ```
 * 
 * Note:
 * - The `onSubmit` prop specifies the callback function to be executed when the form is submitted.
 * - The `onCancel` prop defines the callback function to be executed when the user cancels the form.
 */

export const sendEmailAlert = (yData, cityName) => {
  var PM25 = yData['PM25'];
  var PM10 = yData['PM10'];
  var O3 = yData['O3'];
  var NO2 = yData['NO2'];
  var NH3 = yData['NH3'];
  var SO2 = yData['SO2'];

  var formData = new FormData();
  formData.append('service_id', process.env.REACT_APP_SERVICE_ID);
  formData.append('template_id', process.env.REACT_APP_TEMPLATE_ID);
  formData.append('user_id', process.env.REACT_APP_USER_ID);
  formData.append(
    'subject',
    `Alert: Pollution level exceeded the limit in ${cityName}`
  );
  formData.append(
    'message',
    `Sensor readings at ${cityName}:
\n PM2.5: ${PM25} μg/m3 (0-25)\nPM10: ${PM10} μg/m3 (0-50)\nO3: ${O3} μg/m3 (0-180)\nNO2: ${NO2} μg/m3 (0-200)\nNH3: ${NH3} μg/m3 (0-200)\nSO2: ${SO2} μg/m3 (0-500)`
  );
  formData.append('team', 'team 09');
  formData.append('to_name', 'team');
  formData.append('from_name', `Sensor@${cityName}`);

  fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      response.json();
    })

    .then((data) => {
      console.log('Your mail is sent!', data);
    })
    .catch((error) => {
      console.error('Oops... ', error);
    });
};

// console.log(PM25, PM10, O3, NO2, NH3, SO2);

export const fetchData = async (url, location) => {
  const response = await fetch(url);
  const responseData = await response.json();
  // setData(responseData);
  handleResponse(responseData, location);
};

const handleResponse = (data, location) => {
  const yData = {
    PM25: [],
    PM10: [],
    O3: [],
    NO2: [],
    NH3: [],
    SO2: [],
  };

  for (let index = data.feeds.length - 1; index > -1; index--) {
    const element = data.feeds?.[index];
    yData.PM25 = element.field1;
    yData.PM10 = element.field2;
    yData.O3 = element.field3;
    yData.NO2 = element.field4;
    yData.NH3 = element.field5;
    yData.SO2 = element.field6;

    if (
      yData.PM25 > 25 ||
      yData.PM10 > 50 ||
      yData.O3 > 180 ||
      yData.NO2 > 200 ||
      yData.NH3 > 200 ||
      yData.SO2 > 500
    ) {
      if (process.env.REACT_APP_FLAG) {
        sendEmailAlert(yData, location);
      }
      break;
    }
  }
};
