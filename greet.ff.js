function greetings() {
   
    var namesGreeted = {};
    // var getcounter; 
    function greetName(language, name1) {
        addUserName(name1)
        if (language === "IsiZulu") {
            return "Sawubona " + name1
        }

        else if (language === "English") {
            return "Hello " + name1
        }
        else if (language === "Italian") {
            return "ciao " + name1
        }    

    }

    function greetErrors(language,name1){
        if(name1 === undefined){
            return "enter name"
        }
         if(language === undefined){
            return "select language"
        }
        else if(name1 && language === undefined){
            return "please entre name and select language"
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

