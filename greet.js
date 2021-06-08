var greetmebtn= document.querySelector(".greetme");
var strName = document.querySelector(".name1");
var popup = document.querySelector(".pop-up");
var radioLanguage = document.querySelector(".lingustic");
var counter = document.querySelector(".counterClc");
var errors = document.querySelector(".error1")

var greetInstance = greetings();
var getconter = 0;
var names = [];

function welcomeName(){
    var greetme = document.querySelector("input[name='language']:checked");

   
    greetInstance.greetName(greetme.value, strName.value);
   
    popup.innerHTML = greetInstance.greetName(greetme.value, strName.value);

    counter.innerHTML = greetInstance.greetingcounter();
    // errors.innerHTML = greetInstance.greetErrors()
  
    }
    greetmebtn.addEventListener("click",welcomeName);

// function greetYou(){
//     var greetme = document.querySelector("input[name='language']:checked");
//     var language = greetme.value;
//     var theName = strName.value;

//     if( language && theName ){
//     popup.innerHTML = greetInstance.greetName(greetme.value, strName.value);
//     counter.innerHTML = greetInstance.greetingcounter();

// }else if  (language === undefined  && theName !== undefined){
//     errors.innerHTML = greetInstance.greetErrors()
// }
// }
// greetmebtn.addEventListener("click",greetYou);



