var greetmebtn= document.querySelector(".greet-me");
var strName = document.querySelector(".name1");
var popup = document.querySelector(".pop-up");
var radioLanguage = document.querySelector(".lingustic");



function greetName(){
    popup.innerHTML = strName.value;
    var radiocheckedbtn = document.querySelector("input[name='language']:checked");
    if(radiocheckedbtn){
        var language = radiocheckedbtn.value
        if(language === "isiZulu"){
           return "sawubona ,"  + "";
        }else if (language === "English"){
            return "Hello ,"  + name1
        }else if(language === "italian"){
            return "ciao ," + name1
        }
    }
    radioLanguage.innerHTML = radiocheckedbtn.value;
    // popup.innerHTML = strName.value;
}
greetmebtn.addEventListener("click",greetName)
// radioLanguage.addEventListener("click",greetName)

