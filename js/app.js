'use strict';

let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00am', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

//1st step: Grab your window into the DOM, using the getElementById method. See line #77 in code

// feeding the DOM id profiles, cookieSales variable is assigned to that
let cookieSection = document.getElementById('cookie-sales');
// adding all my city objects to an array for easy storage and use in helper functions
const cities = [];

const cookieForm = document.getElementById('some-cookie');

// console.log(cookieSection);// 'this' refers to the object that will be created.
// this
function CookieCity(city, avgCookie, minCust, maxCust) {
  this.city = city;
  this.cust = [];
  this.avgCookie = avgCookie,
  this.cookieArr = [];
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.totalCookies = 0;

  cities.push(this); //<-- it will put this whole object into cities array
}
// prototype means inherit, any instance of the constructor that we creat will inherit each method     object created through this constructor will inherit methods
CookieCity.prototype.getCust = function () {
  for (let i = 0; i < hours.length; i++) {
    // this is more dynamic and can use the variable which you can be renamed
    this.cust.push(randomCust(this.minCust, this.maxCust));
  }
},
// prototype inherit method, in this case will run which is a code block. this method wil call the method above us.
CookieCity.prototype.calcCookie = function () {
  this.getCust(); // <-- this is a method call
  for (let i = 0; i < hours.length; i++) {
    let cookieBatch = Math.ceil(this.avgCookie * this.cust[i]);
    // console.log('cookie batch var',cookieBatch);
    this.cookieArr.push(cookieBatch);
    this.totalCookies = this.totalCookies + cookieBatch;
  }
};
// create a variable with a new object using a the previous constructor, then the paranthesis include the new arguments to pass in the paramaters
let seattle = new CookieCity('Seattle', 6.3, 23, 65);
let tokyo = new CookieCity('Tokyo', 1.2, 3, 24);
let dubai = new CookieCity('Dubai', 3.7, 11, 38);
let paris = new CookieCity('Paris', 2.3, 20, 38);
let lima = new CookieCity('Lima', 4.6, 2, 16);
//declaring a variable an object,
// let seattle = {
//   city: 'Seattle',
//   cust: [],
//   avgCookie: 6.3,
//   cookieArr: [],
//   minCust: 23,
//   maxCust: 65,
//   totalCookies: 0,
//   getCust: function () {
//     for(let i = 0; i < hours.length; i++){
//       // this is more dynamic and can use the variable which you can be renamed
//       this.cust.push(randomCust(this.minCust,this.maxCust));
//       //
//     }
//   },
//   calcCookie: function () {
//     this.getCust(); // <-- this is a method call
//     for(let i = 0; i < hours.length; i++){
//       let cookieBatch = Math.ceil(this.avgCookie * this.cust[i]);
//       this.cookieArr.push(cookieBatch);
//       this.totalCookies = this.totalCookies + cookieBatch;
//     }
//   }
// };
// seattle.getCust();
// seattle.calcCookie();

console.log(seattle);

// let tokyo = {
//   city: 'Tokyo',
//   cust: [],
//   avgCookie: 1.2,
//   cookieArr: [],
//   minCust: 3,
//   maxCust: 24,
//   totalCookies: 0,
//   getCust: function () {
//     for(let i = 0; i < hours.length; i++){
//       this.cust.push(randomCust(this.minCust,this.maxCust));
//     }
//   },
//   calcCookie: function () {
//     this.getCust();
//     for(let i = 0; i < hours.length; i++){
//       let cookieBatch = Math.ceil(this.avgCookie * this.cust[i]);
//       this.cookieArr.push(cookieBatch);
//       this.totalCookies = this.totalCookies + cookieBatch;
//     }
//   }
// };

// let dubai = {
//   city: 'Dubai',
//   cust: [],
//   avgCookie: 3.7,
//   cookieArr: [],
//   minCust: 11,
//   maxCust: 38,
//   totalCookies: 0,
//   getCust: function () {
//     for(let i = 0; i < hours.length; i++){
//       this.cust.push(randomCust(this.minCust,this.maxCust));
//     }
//   },
//   calcCookie: function () {
//     this.getCust();
//     for(let i = 0; i < hours.length; i++){
//       let cookieBatch = Math.ceil(this.avgCookie * this.cust[i]);
//       this.cookieArr.push(cookieBatch);
//       this.totalCookies = this.totalCookies + cookieBatch;
//     }
//   }
// };

// let paris = {
//   city: 'Paris',
//   cust: [],
//   avgCookie: 2.3,
//   cookieArr: [],
//   minCust: 20,
//   maxCust: 38,
//   totalCookies: 0,
//   getCust: function () {
//     for(let i = 0; i < hours.length; i++){
//       this.cust.push(randomCust(this.minCust,this.maxCust));
//     }
//   },
//   calcCookie: function () {
//     this.getCust();
//     for(let i = 0; i < hours.length; i++){
//       let cookieBatch = Math.ceil(this.avgCookie * this.cust[i]);
//       this.cookieArr.push(cookieBatch);
//       this.totalCookies = this.totalCookies + cookieBatch;
//     }
//   }
// };

// let lima = {
//   city: 'Lima',
//   cust: [],
//   avgCookie: 4.6,
//   cookieArr: [],
//   minCust: 2,
//   maxCust: 16,
//   totalCookies: 0,
//   getCust: function () {
//     for(let i = 0; i < hours.length; i++){
//       this.cust.push(randomCust(this.minCust,this.maxCust));
//     }
//   },
//   calcCookie: function () {
//     this.getCust();
//     for(let i = 0; i < hours.length; i++){
//       let cookieBatch = Math.ceil(this.avgCookie * this.cust[i]);
//       this.cookieArr.push(cookieBatch);
//       this.totalCookies = this.totalCookies + cookieBatch;
//     }
//   }
// };

function randomCust(min, max) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}
// let allows flexibility
// const, once declared you cannot change


// getAllCustomers();
// console.log(cities);
// ************** DOM Manipulation ***********************

// STEPS:
// 1st step: Grab your window into the DOM, using the getElementById method. See line #9 in code
// 2nd step: Create the element using the createElement method - takes in a string of the element type you want to create ('p') <- creates a p tag element
// 3rd step: Give that element context (if you want or need to)
// 4th step: append(add) to the DOM <-- parentElem.appendChild(childElem)


// <!-- generate this from js: -->
// <!-- <article>
//        <h2></h2>
//        <p></p>
//        <ul>
//         <li></li>
//        </ul>
//        <img>
//      </article> -->
function createHeader() {

  const tableElem = document.createElement('table');
  cookieSection.appendChild(tableElem);

  // // // body and rows
  const tableHeadElem = document.createElement('thead');
  tableElem.appendChild(tableHeadElem);

  const row = document.createElement('tr');
  tableHeadElem.appendChild(row);

  const emptyFirstRow = document.createElement('th');
  emptyFirstRow.textContent = '';
  row.appendChild(emptyFirstRow);

  for (let i = 0; i < hours.length; i++) {
    const th1Elem = document.createElement('th');
    th1Elem.textContent = hours[i];
    row.appendChild(th1Elem);
  }
  const th3Elem = document.createElement('th');
  th3Elem.textContent = 'Daily Total';
  row.appendChild(th3Elem);
}
createHeader();

CookieCity.prototype.renderCookies = function () {

  // create an article element, it doesn't need context but append it to our DOM window, cookieSales
  const table = document.querySelector('table');

  //********** helper function example **********
  // function createElement(tag, parent) {
  //   const elem = document.createElement(tag);
  //   parent.appendChild(elem);
  //   return elem;
  // }

  //EXAMPLE: let thElem = createElement('th', tableElem);

  //******** DOM TABLE RENDER ************

  const row1 = document.createElement('tr');
  table.appendChild(row1);
  // cookieSales is our window into the DOM

  //create h2 element, give it context
  // and append it to the article element
  const th4Elem = document.createElement('th');
  th4Elem.textContent = this.city;
  row1.appendChild(th4Elem);


  // loop through the hours array to create list
  for (let i = 0; i < hours.length; i++) {
    // 6am: 16 cookies
    const tdElem = document.createElement('td');
    tdElem.textContent = `${this.cookieArr[i]}`;
    row1.appendChild(tdElem);
  }
  const td2Elem = document.createElement('td');
  td2Elem.textContent = `${this.totalCookies} cookies`;
  row1.appendChild(td2Elem);
};
// ******* FOOOTER START *******

function renderFooter() {
  let table = document.querySelector('table');
  const footElem = document.createElement('tfoot');
  table.appendChild(footElem);

  const row3 = document.createElement('tr');
  footElem.appendChild(row3);

  const th3Elem = document.createElement('th');
  th3Elem.textContent = 'Daily Total';
  row3.appendChild(th3Elem);

  let cookieTotal = 0;

  for (let i = 0; i < hours.length; i++) {
    let hourTotal = 0;
    for (let j = 0; j < cities.length; j++) {
      hourTotal += cities[j].cookieArr[i];
      cookieTotal += hourTotal;
      console.log(cookieTotal,'Total');
      // cookieTotal += cities[j].cookieArr[i];
    }
    // for (let i = 0; i < hours.length; i++){
    //
    //     const td3Elem = document.createElement('td');
    //   td3Elem.textContent = this.cookieArr[j][i];
    //   row3.appendChild(td3Elem);
    //     cookieTotal +=
    console.log(hourTotal);
    const td3Elem = document.createElement('td');
    td3Elem.textContent = hourTotal;
    row3.appendChild(td3Elem);
  }
}

// for loop through cities
function renderAllCities() {
  for (let i = 0; i < cities.length; i++) {
    let currentCity = cities[i];
    currentCity.calcCookie();
    currentCity.renderCookies();
  }
}

function handleSubmit(event){
  event.preventDefault();

  let city = event.target.cityName.value;
  let avgCookie = +event.target.avgCookie.value;
  let minCust = +event.target.minCust.value;
  let maxCust = +event.target.maxCust.value;

  // let age = +event.target.age.value; <--- use plus signs to have the input turn from a string to a number
  // array; interests = interests.split(','); <- this will return an array

  let newCookie = new CookieCity(city, avgCookie, minCust, maxCust);

  newCookie.getCust();
  newCookie.getCust();
  newCookie.renderCookies();
}

cookieForm.addEventListener('submit', handleSubmit);
renderAllCities();
renderFooter();
