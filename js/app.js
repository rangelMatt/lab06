'use strict';

let hours = ['6:00am', '7:00am', '8:00am','9:00am', '10:00am', '11:00am','12:00pm', '1:00pm', '2:00am','3:00pm','4:00pm', '5:00pm', '6:00pm','7:00pm'];

//1st step: Grab your window into the DOM, using the getElementById method. See line #77 in code

// feeding the DOM id profiles, cookieSales variable is assigned to that
let cookieSales = document.getElementById('cookie-sales');
// adding all my city objects to an array for easy storage and use in helper functions
const cities = [];

console.log(cookieSales);

function CookieCity(city, avgCookie, minCust, maxCust){
  this.city = city;
  this.cust = [];
  this.avgCookie = avgCookie,
  this.cookieArr = [];
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.totalCookies = 0;

  cities.push(this);
}

CookieCity.prototype.getCust = function () {
  for(let i = 0; i < hours.length; i++){
    // this is more dynamic and can use the variable which you can be renamed
    this.cust.push(randomCust(this.minCust,this.maxCust));
  }
},

CookieCity.prototype.calcCookie = function () {
  this.getCust(); // <-- this is a method call
  for(let i = 0; i < hours.length; i++){
    let cookieBatch = Math.ceil(this.avgCookie * this.cust[i]);
    // console.log('cookie batch var',cookieBatch);
    this.cookieArr.push(cookieBatch);
    this.totalCookies = this.totalCookies + cookieBatch;
  }
};

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
function createHeader(){
  const tableElem = document.createElement('table');
  cookieSales.appendChild(tableElem);

  // // // body and rows
  const tableHeadElem = document.createElement('thead');
  tableElem.appendChild(tableHeadElem);
  const row = document.createElement('tr');
  tableHeadElem.appendChild(row);

  const emptyFirstRow = document.createElement('th');
  emptyFirstRow.textContent = '';
  row.appendChild(emptyFirstRow);

  for (let i = 0; i < hours.length; i++){
    const th1Elem = document.createElement('th');
    th1Elem.textContent = hours[i];
    row.appendChild(th1Elem);
  }
  
 

}
createHeader();

CookieCity.prototype.renderCookies = function() {

  // create an article element, it doesn't need context but append it to our DOM window, cookieSales
  const table = document.querySelector('table');

  //******** DOM TABLE RENDER ************

  const row1 = document.createElement('tr');
  table.appendChild(row1);
  // for(let i = 0; i< hours.length; i++){
  //   const th2Elem = document.createElement('td');
  //   th2Elem.textContent = `${hours[i]}`;
  //   row1.appendChild(th2Elem);
  // }
  // cookieSales is our window into the DOM

  //create h2 element, give it context
  // and append it to the article element
  const th4Elem = document.createElement('th');
  th4Elem.textContent = this.city;
  row1.appendChild(th4Elem);

  // const pElem = document.createElement('p');
  // pElem.textContent = '${cookie.name} is selling ${cookies.total}';
  // // to do: create a function with total cookies??
  // articleElem.appendChild(pElem);


  // loop through the hours array to create list
  for(let i = 0; i < hours.length; i++){
    // 6am: 16 cookies

    const th3Elem = document.createElement('th');
    th3Elem.textContent = `${this.cookieArr[i]}`;
    row1.appendChild(th3Elem);
  }
  const th5Elem = document.createElement('th');
  th5Elem.textContent = `${this.totalCookies} cookies`;
  row1.appendChild(th5Elem);
};

// for loop through cities
function renderAllCities() {
  for (let i = 0; i < cities.length; i++){
    let currentCity = cities[i];
    currentCity.calcCookie();
    currentCity.renderCookies();
  }
}

renderAllCities();
