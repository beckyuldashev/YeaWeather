import HumidityIcon from '@/shared/icons/HumidityIcon';
import TemperatureIcon from '@/shared/icons/TemperatureIcon';
import WindyIcon from '@/shared/icons/WindyIcon';
import SunriseIcon from '@/shared/icons/Sunrise';
import SunsetIcon from '@/shared/icons/Sunset';
import { formatTime } from '@/shared/helpers/formatTime';
import { IWeather } from '../../model/types';
import IndicatorsList from './weatherIndicators/WeatherIndicators';

import cl from './styles.module.css';

interface WeatherDataProps {
  weatherData: IWeather | null;
}

const WeatherItem = ({ weatherData }: WeatherDataProps) => {
  if (!weatherData) {
    return <h1>Oops! Weather data is not found</h1>;
  }

  const { main, name, weather, sys, wind } = weatherData;
  const indicatorsData = [
    {
      title: 'feels like',
      value: main.feels_like + '°C',
      Icon: TemperatureIcon,
    },
    {
      title: 'humidity',
      value: main.humidity + '%',
      Icon: HumidityIcon,
    },
    {
      title: 'wind',
      value: wind.speed + ' m/s',
      Icon: WindyIcon,
    },
    {
      title: 'sunrise',
      value: formatTime(sys.sunrise),
      Icon: SunriseIcon,
    },
    {
      title: 'sunset',
      value: formatTime(sys.sunset),
      Icon: SunsetIcon,
    },
  ];

  return (
    <div className={cl.item}>
      <img
        className={cl.img}
        src={`https://openweathermap.org/img/w/${weather[0].icon}.png`}
        alt={weather[0].main}
      />
      <span className={cl.temp}>{main.temp}&deg;C</span>
      <h3 className={cl.city}>{name}</h3>
      <IndicatorsList indicatorsData={indicatorsData} />
    </div>
  );
};

export default WeatherItem;
