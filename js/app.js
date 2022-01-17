'use strict';



let hours = ['6am', '7am', '8am','9am', '10am', '11am','12pm', '1pm', '2am','3pm','4pm', '5pm', '6pm','7pm'];

let cookieSales = document.getElementById('cookie-sales');

console.log(cookieSales);

let seattle = {
  city: 'Seattle',
  cust: null,
  avgCookie: 6.3,
  getCust: function () {
    this.cust = `${randomCust(23,65)} customers`;
  }
};

let tokyo = {
  city: 'Tokyo',
  cust: null,
  avgCookie: 6.3,
  getCust: function () {
    this.cust = `${randomCust(23,65)} customers`;
  }
};

let dubai = {
  city: 'Dubai',
  cust: null,
  avgCookie: 6.3,
  getCust: function () {
    this.cust = `${randomCust(23,65)} customers`;
  }
};

let paris = {
  city: 'Paris',
  cust: null,
  avgCookie: 6.3,
  getCust: function () {
    this.cust = `${randomCust(23,65)} customers`;
  }
};

let lima = {
  city: 'Lima',
  cust: null,
  avgCookie: 6.3,
  getCust: function () {
    this.cust = `${randomCust(23,65)} customers`;
  }
};

function randomCust(min, max) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}

const cities = [seattle, tokyo, dubai, paris, lima];

function getAllCustomers(){
  for(let i = 0; i < cities.length; i++) {
    let currentCity = cities[i];
    currentCity.getCust();
  }
}

getAllCustomers();

// ************** DOM Manipulation ***********************

// STEPS:
// 1st step: Grab your window into the DOM, using the getElementById method. See line #19 in code
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