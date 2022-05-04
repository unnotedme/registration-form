document.getElementById("form");
function validateAll() {
    lengthValidation()
    matchPass()
    validateGender()
}

function lengthValidation() {
    var password = document.getElementById("password").value;

    if (password.length < 6) {
        alert("password must be at least 6 characters long.");
    }

}

function matchPass() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("password must be the same!");
    }
}

function validateGender() {
    var genderList = document.getElementsByClassName("gender-in-class");
    var emptyForm = true

        if (genderList[0].checked == true) {
            emptyForm = false
        }
        else if (genderList[1].checked == true) {
            emptyForm = false
        }
        else if (genderList[2].checked == true) {
            emptyForm = false
        }
        else if (genderList[3].checked == true) {
            emptyForm = false
        }
        else {
            emptyForm = true
            alert("select your gender!"); 
        }     
}