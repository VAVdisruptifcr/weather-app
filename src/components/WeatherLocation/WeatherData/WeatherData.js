import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from '../WeatherTemperature';
import {
    SUNNY,
} from '../../constants/weather';

const WeatherData = () => (
    <div>
        <WeatherTemperature 
            temperature={32}
            weatherState={SUNNY}
        />
        <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
    </div>
);

export default WeatherData;