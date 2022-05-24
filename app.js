const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// div class deadline
// h4 class birthday
// all the h4: hours, mins,secs, days 

const birthDay = document.querySelector(".birthday");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

// let tempDate = new Date();
// let tempYear = tempDate.getFullYear();
// let tempMonth = tempDate.getMonth();
// let tempDay = tempDate.getDate();

// const futureDate = new Date(tempYear, tempMonth, tempDay + 1, 11, 59,0);
let futureDate = new Date(2022, 4, 29, 00, 00, 00);  // year, month, day, hr, min,sec

const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const min = futureDate.getMinutes();
const sec = futureDate.getSeconds();

let month = futureDate.getMonth();
month = months[month];
// samething as const month = months[futureDate.getMonth()];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

// let weekday = futureDate.getDay();
// weekday = weekdays[weekday];

// display to the DOM
birthDay.textContent = `countdownn to  ${weekday}, ${date} ${month} ${year}  ${hour}:${min}am`;

// get milliSec for our futureDate and miliSec for our currentDate, the we have to subtract them
// thats going to give us a value that difference inbetween dates
// the we calculate how many days are there,hours,mins and secs

// future time in ms
const futureTime = futureDate.getTime();


const getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;
  
  //1s = 1000ms
  //1m = 60s
  //1hr = 60mins
  //1d = 24hr

  // value in ms
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array:
  const values = [days, hours, minutes, seconds];

  const ifNumberLessThan10 = (item) => {
    if(item < 10) {
      return "0" + item;
    }
    return item;  //if d value is bigger than 10, just return my item
  }

  items.forEach(( item, index) =>  {
    item.innerHTML = ifNumberLessThan10(values[index]);
  });
  if(t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, wait for your next birthday</h4>`;
  }
}

// countdown 
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();





























// const birthDay = document.querySelector(".birthday");
// const deadline = document.querySelector(".deadline");
// const items = document.querySelectorAll(".deadline-format h4");

// let futureDate = new Date(2022, 4, 29, 12, 30, 0);

// const year = futureDate.getFullYear();
// const month = months[futureDate.getMonth()];
// const date = futureDate.getDate();
// const weekday = weekdays[futureDate.getDay()];
// const hour = futureDate.getHours();
// const min = futureDate.getMinutes();

// // display on the DOM
// birthDay.textContent = `countdown to my birthday ${weekday}, ${date} ${month} ${year} ${hour}:${min}am`




































