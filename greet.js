var greetmebtn= document.querySelector(".greetme");
var strName = document.querySelector(".name1");
var popup = document.querySelector(".pop-up");
var radioLanguage = document.querySelector(".lingustic");
var counter = document.querySelector(".counterClc");
var errors = document.querySelector(".error1")

var greetInstance = greetings();
var getconter = 0;
var names = [];

// function welcomeName(){
//     var greetme = document.querySelector("input[name='language']:checked");

   
//     greetInstance.greetName(greetme.value, strName.value);
   
//     popup.innerHTML = greetInstance.greetName(greetme.value, strName.value);

//     counter.innerHTML = greetInstance.greetingcounter();
//     // errors.innerHTML = greetInstance.greetErrors()
  
//     }
//     greetmebtn.addEventListener("click",welcomeName);


function greetYou(){
    var greetme = document.querySelector("input[name='language']:checked");
    var theName = strName.value;
    
    if(greetme  && theName){
        var language = greetme.value;
        

        popup.innerHTML = greetInstance.greetName(language,theName);
        counter.innerHTML = greetInstance.greetingcounter();
    
    }else if(!theName && greetme) {
        
        errors.innerHTML = greetInstance.greetErrors();
    }
    else if(theName && greetme === null){
        
        errors.innerHTML = greetInstance.greetErrors(greetme, theName); 
    }else if(!theName && !language){
        errors.innerHTML = greetInstance.greetErrors(language,theName); 
    }
    }
greetmebtn.addEventListener("click",greetYou);



