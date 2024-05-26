const toastLogged = document.querySelector(".toast-login")
const toastInvalid = document.querySelector(".toast-invalid")

try {
const cookie = document.cookie.split("=")
if (cookie[0] == "token" && cookie[1] == "false") {
    toastInvalid.classList.add("show");
}

else if (cookie[0] == "token" && cookie[1] == "true") {
    toastLogged.classList.add("show");
}
document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;"
}
catch(err) {
console.log("error")
}
     
