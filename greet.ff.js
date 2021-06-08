function greetings() {
   
    var namesGreeted = {};
    // var getcounter; 
    function greetName(greetme, name1) {
        addUserName(name1)
        if (greetme === "IsiZulu") {
            return "Sawubona " + name1
        }

        else if (greetme === "English") {
            return "Hello " + name1
        }
        else if (greetme === "Italian") {
            return "ciao " + name1
        }    

    }

    function greetErrors(language,name1){
        if(name1 === undefined){
            return "enter name";
        }
         else if(language === null){
            return "select language";
        }
        else if(!name1 && !language ){
            return "please enter name and select language";
        }
    }
    
    function addUserName(name1){
        if(namesGreeted[name1] === undefined){
            namesGreeted[name1] = 0
        } 
    }
    function greetingcounter(){
        return Object.keys(namesGreeted).length
    }

   
  
    return {
        greetName,
        greetingcounter,
        greetErrors
        
    }
}

