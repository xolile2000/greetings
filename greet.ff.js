function greetings(existingNames) {
   
    var namesGreeted = existingNames || {};
     
    function greetName(greetme, names) {
        addUserName(names)
        var names = names.charAt(0).toUpperCase() + 
        names.slice(1).toLowerCase();
        
        if (greetme === "IsiZulu") {
            return "Sawubona " + names
        }

        else if (greetme === "English") {
            return "Hello " + names
        }
        else if (greetme === "Italian") {
            return "ciao " + names
        }    

    }

    function greetErrors(language,name1){
        if(name1 === undefined){
            return "Please enter name";
        }
         else if(language === null){
            return "Please select language";
        }
        else if(!name1 && !language ){
            return "Please enter name and select language";
        }
    }
    
    function addUserName(name1){
        var name1 = name1.charAt(0).toUpperCase() + 
        name1.slice(1).toLowerCase();
        if(name1){
            if(namesGreeted[name1] === undefined){
                namesGreeted[name1] = 0
            } 
        }
      
    }
    
    function greetingcounter(){
        return Object.keys(namesGreeted).length
    }
     function getNames(){
         return namesGreeted
     }
     function remove(){
        localStorage.clear();
     }
     function timeOut (){
         return ""
     }
    


  

   
  
    return {
        greetName,
        greetingcounter,
        greetErrors,
        getNames,
        remove,
        timeOut,
        addUserName
       
        

        
    }
}

