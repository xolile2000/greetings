var greetmebtn= document.querySelector(".greetme");
var strName = document.querySelector(".name1");
var popup = document.querySelector(".pop-up");
var radioLanguage = document.querySelector(".lingustic");
var counter = document.querySelector(".counterClc")

var greetInstance = greetings()
var getconter = 0;
var names = [];

function welcomeName(){
    var greetme = document.querySelector("input[name='language']:checked");

   
    greetInstance.greetName(greetme.value, strName.value);
   
    popup.innerHTML = greetInstance.greetName(greetme.value, strName.value);

    counter.innerHTML = greetInstance.greetingcounter()
    
  
    }
    

 

greetmebtn.addEventListener("click",welcomeName)


