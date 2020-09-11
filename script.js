

var inputIds = ["#9", "#10", "#11", "#12", "#1", "#2", "#3", "#4",  "#5"];
var currentSchedule= ["09:00:00", "10:00:00", "11:00:00", "12:00:00", "13:00:00",  "14:00:00",  "15:00:00",  "16:00:00",  "17:00:00"];
var changedSchedule = ["10:00:00", "11:00:00", "12:00:00", "13:00:00",  "14:00:00",  "15:00:00",  "16:00:00",  "17:00:00"];

var  todos = [];
var getLocalStorage = JSON.parse(localStorage.getItem("todo-items"));

if (getLocalStorage !== null) {
 todos = getLocalStorage;
}
//current day function
$(function(){
  $("#currentDay").text((moment().format("L")));
});




//momment.js function that finds the ids and buttons to add a class to disable the tasks that are overdue
function timeBlock(){
for (var i=0;i<inputIds.length; i++) {
  var atrElement = $(inputIds[i]);
  var btnElement = atrElement.find("button");

  //if the current time is less than the upcoming times than add future class
  if ((moment().format('MMMM Do YYYY, HH:mm:ss')) < (moment().format('MMMM Do YYYY') +  ", " + currentSchedule[i])) { 
    atrElement.attr("class", "future");
     //The forEach() method executes a provided function once for each array element.
     //keep the input value from local starage in the input
    todos.forEach(function(item) {
      if (inputIds[i] === ("#" + (item["input-id"]))) {
        atrElement.val(item["input-value"]);
      }
    });
  }//if the curent time is greaterthan or equal to and less than current time it will add the present attribute
  else if (((moment().format('MMMM Do YYYY, HH:mm:ss')) >= (moment().format('MMMM Do YYYY') +  ", " + currentSchedule[i])) &&  
          ((moment().format('MMMM Do YYYY, HH:mm:ss')) < (moment().format('MMMM Do YYYY') +  ", " + changedSchedule[i])))
  {
    atrElement.attr("class", "present");
    $(".present").attr("disabled", "disabled");
    btnElement.attr("disabled", true);
     //The forEach() method executes a provided function once for each array element.
     //keep the input value from local starage in the input
    todos.forEach(function(item) {
      if (inputIds[i] === ("#" + item["input-id"])) {
        atrElement.val(item["input-value"]);
      }
    });
  }//if time is greater than and time on the page, add past class to those times
  else if ((moment().format('MMMM Do YYYY, HH:mm:ss')) > (moment().format('MMMM Do YYYY') +  ", " + currentSchedule[i])) {
    atrElement.attr("class", "past");
    $(".past").attr("disabled", "disabled");
    btnElement.attr("disabled", true);
  }
}
}






//gets the input value and stores it in the local storage when button is clicked
$(".saveBtn").on("click", function() {
  var dummy = $(this).parent(); 
  var inputVal = dummy.find("input").val();
  var inputId = dummy.find("input").attr("id");
  var textObj = {
    "input-id": inputId,
    "input-value": inputVal };
  
  if (textObj["input-value"] !== "") {
    todos.push(textObj);
    localStorage.setItem("todo-items", JSON.stringify(todos));
  }
});

timeBlock();

