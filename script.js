var currentDAy = document.querySelector("#currentDay");
var  nine = document.querySelector(".9am");
var ten = document.querySelector(".10am");
var eleven = document.querySelector(".11am");
var twelve = document.querySelector(".12pm");
var one = document.querySelector(".1pm");
var two = document.querySelector(".2pm");
var three = document.querySelector(".3pm");
var four = document.querySelector(".4pm");
var five = document.querySelector(".5pm");
var save = document.querySelector(".saveBtn");
//show current date and time on top
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
currentDAy.textContent = today;
 console.log(today);

// store in localStorage.
