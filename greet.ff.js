function greetings() {
   
    var namesGreeted = {};
    // var getcounter; 
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
        var name1 = name1.charAt(0).toUpperCase() + 
        name1.slice(1).toLowerCase();
        if(namesGreeted[name1] === undefined){
            namesGreeted[name1] = 0
        } 
    }
    function greetingcounter(){
        return Object.keys(namesGreeted).length
    }
    // function capitalizeFLetter(name1) {
    //     //  var string = strName.value;
    //      return name1.charAt(0).toUpperCase() + 
    //       name1.slice(1);
    // }

   
  
    return {
        greetName,
        greetingcounter,
        greetErrors,
        

        
    }
}

