var greetmebtn= document.querySelector(".greetme");
var strName = document.querySelector(".name1");
var popup = document.querySelector(".pop-up");
var radioLanguage = document.querySelector(".lingustic");
var counter = document.querySelector(".counterClc");
var errors = document.querySelector(".error1");
var store = document.querySelector(".store")


var existingNames; 

if( localStorage['name']){
    existingNames = JSON.parse(localStorage.getItem('name'))
    counter.innerHTML = Object.keys(existingNames).length

}


var greetInstance = greetings(existingNames);
// var getconter = 0;
// var names = [];



// function welcomeName(){
//     var greetme = document.querySelector("input[name='language']:checked");

   
//     greetInstance.greetName(greetme.value, strName.value);
   
//     popup.innerHTML = greetInstance.greetName(greetme.value, strName.value);

//     counter.innerHTML = greetInstance.greetingcounter();
//     // errors.innerHTML = greetInstance.greetErrors()
  
//     }
//     greetmebtn.addEventListener("click",welcomeName);



function greetYou(){
    var lang = document.querySelector("input[name='language']:checked");
    var theName = strName.value;
    
    if(lang  && theName){
        var language = lang.value;
        
      
        popup.innerHTML = greetInstance.greetName(language,theName);
        localStorage.setItem('name', JSON.stringify(greetInstance.getNames()))
        counter.innerHTML = greetInstance.greetingcounter();
    
    }else if(!theName && lang) {
        
        errors.innerHTML = greetInstance.greetErrors();
    }
    else if(theName && lang === null){
        
        errors.innerHTML = greetInstance.greetErrors(lang, theName); 
    }else if(!theName && !language){
        errors.innerHTML = greetInstance.greetErrors(language,theName); 
    }
    }
    
    //  let greeted = greetInstance.getNames()
    //  if( localStorage['greeted']){
    //      greeted = 
    //  }
       
        

    
greetmebtn.addEventListener("click",greetYou);



