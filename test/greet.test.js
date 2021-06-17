describe("greetings" , function(){
    it(' should be able to output a massage which greets in IsiZulu' , function(){
       let greet = greetings()
    
       greet.greetName("IsiZulu","xolile")
       assert.equal("Sawubona Xolile",greet.greetName("IsiZulu","xolile"));


       
    });
    it(' should be able to output a massage which greets in English' , function(){
        let greet = greetings()
     
        greet.greetName("English","Zinhle")
        assert.equal("Hello Xolile",greet.greetName("English","xolile"));
 
 
        
     });
     it(' should be able to output a massage which greets in Italian' , function(){
        let greet = greetings()
     
        greet.greetName("Italian","Kamo")
        assert.equal("ciao Kamo",greet.greetName("Italian","Kamo"));
 
 
        
     });
     describe("error massages" , function(){
        it(' should be able to output a error massage if a name is not inputed' , function(){
           let greet = greetings()
        
           greet.greetErrors("IsiZulu",undefined)
           assert.equal('enter name',greet.greetErrors('IsiZulu',undefined));
    
    
           
        });
        it(' should be able to output a error massage if a language is not selected' , function(){
            let greet = greetings()
         
            greet.greetErrors(null,"Xolile")
             assert.equal("select language",greet.greetErrors(null,"Xolile"));
     
     
            
         });
         it(' should be able to output a error massage if both language and name are not selected' , function(){
            let greet = greetings()
         
            greet.greetErrors("","")
             assert.equal('please enter name and select language',greet.greetErrors("",""));
     
     
            
         });
         describe("counter" , function(){
            it(' should be able to count how many names are being entered in the intext box' , function(){
               let greet = greetings()
               
            
              greet.greetName("xolile")
              assert.equal(1,greet.greetName("xolile"))
               
        
        
               
            });
            it(' should be able to count how many names are being entered in the intext box' , function(){
               let greet = greetings()
              
            
              greet.greetingcounter("xolile","Zinhle")
              assert.equal(2,greet.greetingcounter("xolile","Zinhle"))
               
        
        
               
            });
 
 });

});
    
});
