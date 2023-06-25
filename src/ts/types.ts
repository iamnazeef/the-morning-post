export interface Dates {
  weekday: string;
  month: string;
  day: number;
  year: number;
  getDate(): string;
}

export interface CategoriesData {
  name: string;
  link: string;
}

export interface WeatherData {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  rain: Rain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Rain {
  "1h": number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Articles {
  totalArticles: number;
  articles: Article[];
}

export interface Article {
  content: string;
  description: string;
  image: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
}

export interface Source {
  name: string;
  url: string;
}
