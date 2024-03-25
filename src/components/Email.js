export const sendEmailAlert = (yData, cityName) => {
  console.log(yData);
  var co = yData['co']['maximum'];
  var nh3 = yData['nh3']['maximum'];
  var no = yData['no']['maximum'];
  var no2 = yData['no2']['maximum'];
  var o3 = yData['o3']['maximum'];
  var so2 = yData['so2']['maximum'];

  if (co > 550 || nh3 > 10 || no > 65 || no2 > 60 || o3 > 60 || so2 > 1) {
    var formData = new FormData();
    formData.append('service_id', 'service_oec9xo8');
    formData.append('template_id', 'template_gu7qug6');
    formData.append('user_id', 'DSyLukE1R1e1xp8kk');
    formData.append(
      'subject',
      `Alert: Pollution level exceeded the limit in ${cityName}`
    );
    formData.append(
      'message',
      `Sensor readings at ${cityName}:
\n CO:${co} μg/m3\nNH3:${nh3} μg/m3\nNO:${no} μg/m3\nNO2:${no2} μg/m3\nO3:${o3} μg/m3\nSO2:${so2} μg/m3 `
    );
    formData.append('team', 'team 09');
    formData.append('to_name', 'team');
    formData.append('from_name', `Sensor@${cityName}`);

    fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Your mail is sent!', data);
      })
      .catch((error) => {
        console.error('Oops... ', error);
      });
  }

  console.log(co, nh3, no, no2, o3, so2);
};
