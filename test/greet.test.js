describe("greetings" , function(){
    it(' should be able to output a massage which greets in a different language' , function(){
       let greet = greetings()
    
       greet.greetName("IsiZulu","xolile")
       assert.equal("Sawubona Xolile",greet.greetName("IsiZulu","xolile"));


       
    });

});
    

