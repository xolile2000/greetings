var greetmebtn = document.querySelector(".greetme");
var strName = document.querySelector(".name1");
var popup = document.querySelector(".pop-up");
var radioLanguage = document.querySelector(".lingustic");
var counter = document.querySelector(".counterClc");
var errors = document.querySelector(".error1");
var counterbtn = document.querySelector(".counterbtn")



var existingNames;

if (localStorage['name']) {
    existingNames = JSON.parse(localStorage.getItem('name'))
    counter.innerHTML = Object.keys(existingNames).length

}


var greetInstance = greetings(existingNames);






function greetYou() {
    setTimeout(function () {
        errors.innerHTML = greetInstance.timeOut();

    }, 3000);
    var lang = document.querySelector("input[name='language']:checked");
    var theName = strName.value;




    if (lang && theName) {
        var language = lang.value;


        popup.innerHTML = greetInstance.greetName(language, theName);
        localStorage.setItem('name', JSON.stringify(greetInstance.getNames()))
        counter.innerHTML = greetInstance.greetingcounter();
    } else if (!theName && lang) {

        errors.innerHTML = greetInstance.greetErrors();
    }
    else if (theName && lang === null) {

        errors.innerHTML = greetInstance.greetErrors(lang, theName);
    } else if (!theName && !language) {
        errors.innerHTML = greetInstance.greetErrors(language, theName);
    }

    
    unchecked()
}






greetmebtn.addEventListener("click", greetYou);

function removeItems() {
    localStorage.clear();
    location.reload()
    unchecked()
}
function unchecked() {
    var lang = document.querySelector("input[name='language']:checked");
    lang.checked = false
    strName.value = ''

}
counterbtn.addEventListener('click', removeItems)





