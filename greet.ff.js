function greetings() {
    // let namesGreeted = new Map()
    var namesGreeted = {};
    var getcounter = 0
    function greetName(language, name1) {
        
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
    function greetingcounter(name1){
        if(namesGreeted[name1] === undefined){
            namesGreeted[name1] = 0;{ 
                
                getcounter++;
            }

        }
    }

   
  
    return {
        greetName,
        greetingcounter
        
    }
}

