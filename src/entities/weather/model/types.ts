export interface IWeather {
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
}

export interface IFavoritesCity {
  icon: string;
  city: string;
  status: string;
  temp: number;
}

export interface FavoritesCityResponse {
  cnt: number;
  list: IWeather[];
}
