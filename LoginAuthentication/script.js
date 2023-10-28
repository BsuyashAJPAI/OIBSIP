function login() {
    let v = document.getElementById("pass");
    let m = document.getElementById("mail");
    if (v.value == "suyash") {
        alert("Congratulations! you can enter now")
        v.value = ""
    }

    else if (v.value == "" || m.value == "") {
        alert("Please Enter details")
    }
    
    else {
        alert("you have entered wrong password")
        v.value = ""
    }
}

