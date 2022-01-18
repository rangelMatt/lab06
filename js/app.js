'use strict';

let hours = ['6am', '7am', '8am','9am', '10am', '11am','12pm', '1pm', '2am','3pm','4pm', '5pm', '6pm','7pm'];

//1st step: Grab your window into the DOM, using the getElementById method. See line #77 in code

// feeding the DOM id profiles, cookieSales variable is assigned to that
let cookieSales = document.getElementById('cookie-sales');

console.log(cookieSales);

//declaring a variable an object,
let seattle = {
  city: 'Seattle',
  cust: [],
  avgCookie: 6.3,
  cookieArr: [],
  minCust: 23,
  maxCust: 65,
  totalCookies: 0,
  getCust: function () {
    for(let i = 0; i < hours.length; i++){
      // this is more dynamic and can use the variable which you can be renamed
      this.cust.push(randomCust(this.minCust,this.maxCust));
      //
    }
  },
  calcCookie: function () {
    this.getCust(); // <-- this is a method call
    for(let i = 0; i < hours.length; i++){
      let cookieBatch = Math.ceil(this.avgCookie * this.cust[i]);
      this.cookieArr.push(cookieBatch);
      this.totalCookies = this.totalCookies + cookieBatch;
    }
  }
};
// seattle.getCust();
// seattle.calcCookie();

console.log(seattle);

let tokyo = {
  city: 'Tokyo',
  cust: [],
  avgCookie: 1.2,
  cookieArr: [],
  minCust: 3,
  maxCust: 24,
  totalCookies: 0,
  getCust: function () {
    for(let i = 0; i < hours.length; i++){
      this.cust.push(randomCust(this.minCust,this.maxCust));
    }
  },
  calcCookie: function () {
    this.getCust();
    for(let i = 0; i < hours.length; i++){
      let cookieBatch = Math.ceil(this.avgCookie * this.cust[i]);
      this.cookieArr.push(cookieBatch);
      this.totalCookies = this.totalCookies + cookieBatch;
    }
  }
};

let dubai = {
  city: 'Dubai',
  cust: [],
  avgCookie: 3.7,
  cookieArr: [],
  minCust: 11,
  maxCust: 38,
  totalCookies: 0,
  getCust: function () {
    for(let i = 0; i < hours.length; i++){
      this.cust.push(randomCust(this.minCust,this.maxCust));
    }
  },
  calcCookie: function () {
    this.getCust();
    for(let i = 0; i < hours.length; i++){
      let cookieBatch = Math.ceil(this.avgCookie * this.cust[i]);
      this.cookieArr.push(cookieBatch);
      this.totalCookies = this.totalCookies + cookieBatch;
    }
  }
};

let paris = {
  city: 'Paris',
  cust: [],
  avgCookie: 2.3,
  cookieArr: [],
  minCust: 20,
  maxCust: 38,
  totalCookies: 0,
  getCust: function () {
    for(let i = 0; i < hours.length; i++){
      this.cust.push(randomCust(this.minCust,this.maxCust));
    }
  },
  calcCookie: function () {
    this.getCust();
    for(let i = 0; i < hours.length; i++){
      let cookieBatch = Math.ceil(this.avgCookie * this.cust[i]);
      this.cookieArr.push(cookieBatch);
      this.totalCookies = this.totalCookies + cookieBatch;
    }
  }
};

let lima = {
  city: 'Lima',
  cust: [],
  avgCookie: 4.6,
  cookieArr: [],
  minCust: 2,
  maxCust: 16,
  totalCookies: 0,
  getCust: function () {
    for(let i = 0; i < hours.length; i++){
      this.cust.push(randomCust(this.minCust,this.maxCust));
    }
  },
  calcCookie: function () {
    this.getCust();
    for(let i = 0; i < hours.length; i++){
      let cookieBatch = Math.ceil(this.avgCookie * this.cust[i]);
      this.cookieArr.push(cookieBatch);
      this.totalCookies = this.totalCookies + cookieBatch;
    }
  }
};

function randomCust(min, max) {
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}
// let allows flexibility
// const, once declared you cannot change
const cities = [seattle, tokyo, dubai, paris, lima];

// getAllCustomers();
console.log(cities);
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

function renderCookies(store) {
  store.calcCookie();
  // create an article element, it doesn't need context but append it to our DOM window, cookieSales
  const articleElem = document.createElement('article');
  cookieSales.appendChild(articleElem);

  // cookieSales is our window into the DOM

  //create h2 element, give it context
  // and append it to the article element
  const h1Elem = document.createElement('h1');
  h1Elem.textContent = store.city;
  articleElem.appendChild(h1Elem);

  // const pElem = document.createElement('p');
  // pElem.textContent = '${cookie.name} is selling ${cookies.total}';
  // // to do: create a function with total cookies??
  // articleElem.appendChild(pElem);

  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  // loop through the hours array to create lis
  for(let i = 0; i < hours.length; i++){
    // 6am: 16 cookies

    const liElem = document.createElement('li');
    liElem.textContent = `${hours[i]}: ${store.cookieArr[i]} cookies`;
    ulElem.appendChild(liElem);
  }
  const liElem = document.createElement('li');
  liElem.textContent = `Total: ${store.totalCookies} cookies`;
  ulElem.appendChild(liElem);
}
// for loop through cities
function renderAllCities() {
  for (let i = 0; i < cities.length; i++){
    let currentCity = cities[i];
    renderCookies(currentCity);
  }
}

renderAllCities();
