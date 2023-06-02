document.querySelector("form").addEventListener("submit", signup);


let user = JSON.parse(localStorage.getItem("user")) || [];

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return regex.test(email);
}
let flag=true
function signup(e) {
    e.preventDefault();
  
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (
        firstName == "" ||
        lastName == "" ||
        email == "" ||
        password == "" ||
        confirmPassword != password
    ) {
        alert("invalid details");
    } else {
        if (!validateEmail(email)) {
            alert("invalid email");
        } else {
            for (var i = 0; i < user.length; i++) {
                if (user[i].email === email) {
                  alert('Email already in use.');
                  return;
                }
              }
           
                let details = {
                    id: user.length,
                    firstName: document.getElementById("firstName").value,
                    lastName: document.getElementById("lastName").value,
                    email: document.getElementById("email").value,
                    password: document.getElementById("password").value,
                    confirmPassword: document.getElementById("confirmPassword").value,
                };
                user.push(details);
    
                localStorage.setItem("user", JSON.stringify(user));
                console.log(user);
                alert("signup successful");
            
            
        }
    }
}
