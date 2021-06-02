function greetings(){
    function greetName(){
        
            if(language === "isiZulu"){
               return "sawubona "  + "";
            }else if (language === "English"){
                return "Hello "  + name1
            }else if(language === "italian"){
                return "ciao " + name1
            }
        }
        return {
            greetName,
        }

}