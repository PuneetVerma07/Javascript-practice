let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    document.querySelector("#emailError").textContent = ""
    document.querySelector("#passwordError").textContent = ""

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

let emailAns = emailRegex.test(email.value)
let passwordAns = passwordRegex.test(password.value)

if(!emailAns){
    document.querySelector("#emailError").textContent = "Enter valid email"
}

if(!passwordAns){
    document.querySelector("#passwordError").textContent = "Invalid password"
}
})