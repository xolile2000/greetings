describe("greetings" , function(){
    it(' should be able to output a massage which greets in a different language' , function(){
       let greet = greetings()
    
       greet.greetName(greetme,names)
       assert.equal("sawubona xolile",greet.greetName(greetme,names));


       
    });

});
    

