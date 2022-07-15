var elForm = document.querySelector("#formfizbaz")
var elInput = document.querySelector("#usernumber")
var elBTN = document.querySelector("Btn")

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    var input = elInput.value;

    console.log(input)

    if (input % 3 == 0 && input % 5 == 0) {
        console.log(alert("FIZBAZZ"))
    } else if (input % 5 == 0){
        console.log(alert("BAZZ"));
    } else if (input % 3 == 0) {
        console.log(alert("FIZZ"));
    }else{
        console.log(alert("Boshqa son kiriting"));
    }
})