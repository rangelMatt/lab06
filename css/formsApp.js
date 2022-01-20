'use strict';

// Step 1
let myForm = document.getElementById('my-form');

//Step 3

function handleSubmit(event){
  event.preventDefault();
  console.log(event.target);

  let name = event.target.firstName.value;
  console.log('name', name);

  // when looking for a typeof number , add the plus sign before the event.
  let age = +event.target.age.value;
  console.log(typeof age);

  let housewives = event.target.housewives.value;
  console.log('housewives', housewives);
}




//Step 2
myForm.addEventListener('submit', handleSubmit);
