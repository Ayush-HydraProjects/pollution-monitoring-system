# Pollution Monitoring System

Our project focuses on providing real-time monitoring of air quality, offering insights into various pollutants affecting our environment. With our platform, concern authorities and government agencies can easily track pollutant levels, including PM2.5, PM10, O3, NO2, NH3, and SO2, through intuitive graphical representations.

## Real-Time Data Visualization

Our platform offers real-time data visualization, allowing concern authorities and government agencies to monitor air quality levels continuously. The data is sourced from simulations we've developed for two key locations in Belgium: Brussels and Ghent.

- **Brussels Simulation:** [Explore Brussels Simulation](https://wokwi.com/projects/394023340226542593)
- **Ghent Simulation:** [Explore Ghent Simulation](https://wokwi.com/projects/394271044212210689)

## Interactive Simulations

To observe live changes in air quality, concern authorities and government agencies can enable simulations for specific locations. In Brussels, we've implemented a random function that updates values within predefined ranges at 15-second intervals. For Ghent, users can manually adjust sensor readings for testing purposes.

## Alert Functionality

Our platform includes an alert system to notify concern authorities and government agencies when pollutant levels exceed predefined thresholds. Authorities receive email alerts, ensuring timely action in response to deteriorating air quality. Additionally, lamps integrated into the graphs visually indicate when pollutant levels surpass acceptable limits.

## Measurement Units

Pollutant levels are measured in micrograms per cubic meter (µg/m3), providing precise information about air quality conditions.

With our intuitive platform, we aim to empower concern authorities and government agencies with actionable insights to safeguard our environment and public health. Join us in monitoring and improving air quality for a cleaner, healthier future.

## Demo

[Pollution Monitoring System](https://pollution-monitoring-system.netlify.app/)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_KEY`

`REACT_APP_SERVICE_ID`

`REACT_APP_TEMPLATE_ID`

`REACT_APP_USER_ID`

`REACT_APP_FLAG`

## Run Locally

Clone the project

```bash
  git clone https://github.com/harshsabhaya/pollution-monitoring-system.git
```

Go to the project directory

```bash
  cd pollution-monitoring-system
```

Install dependencies

```bash
  npm install --force
```

Start the server

```bash
  npm start
```


