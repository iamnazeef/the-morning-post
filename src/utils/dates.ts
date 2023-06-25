import { Dates } from "../ts/types";

const date: Date = new Date();

const weekdays: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dates: Dates = {
  weekday: weekdays[date.getDay()],
  month: months[date.getMonth()],
  day: date.getDate(),
  year: date.getFullYear(),
  getDate() {
    return `${this.weekday}, ${this.month} ${this.day}, ${this.year}`;
  },
};

export default dates;
