import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    SUNNY,
    CLOUD,
    RAINNY,
    SNOW,
    THUNDER,
    DRIZZLE,
}from './../../../constants/weather';
import './styles.css';

const icons = {
    [SUNNY]: "day-sunny",
    [CLOUD]: "cloud",
    [RAINNY]: "rain",
    [SNOW]: "snow",
    [THUNDER]:  "day-thunderstorm",
    [DRIZZLE]: "day-showers",
};

const getWeatherIcon = weatherState => {

    const icon = icons[weatherState];

    const sizeIcon = "4x"

    if(icon)

        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />

    else

        return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />
};

const WeatherTemperature = ( {temperature, weatherState} ) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{` ${temperature} `}</span>
        <span className="temperatureType">{` Cº `} </span>
    </div>
);

WeatherTemperature.propTypes = {

    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,

};

export default WeatherTemperature;