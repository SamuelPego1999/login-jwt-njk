
document.querySelector(".form-signUp").addEventListener("submit",async (event)=> {
  event.preventDefault();
  const btnSubmit = document.querySelector(".btn-form-signUp");
  const formData = new FormData(event.target,btnSubmit)
  const spinner = document.querySelectorAll(".spinner")[1];
  spinner.classList.remove("invisible");
  btnSubmit.classList.add("invisible");
  const req = await fetch("/signUp",{
    method:"POST",
    body:formData
  })

  const res = await req.json();
  if (req.ok) {
    spinner.classList.add("invisible");
    btnSubmit.classList.remove("invisible");
    const inputs = document.querySelectorAll("input");
    const textError = document.querySelector(".error-message-signup");
    textError.innerHTML = res.message;
    textError.classList.toggle("text-danger",false);
    inputs.forEach(input => input.value = "");
   
  }
  else {
  spinner.classList.add("invisible")
  btnSubmit.classList.remove("invisible");
  const textError = document.querySelector(".error-message-signup");
  textError.innerHTML = res.message; 
  textError.classList.toggle("text-danger",true);
  
}
  console.log(res)
  
})