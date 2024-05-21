
document.querySelector(".form-signUp").addEventListener("submit",async (event)=> {
  event.preventDefault();
  const btnSubmit = document.querySelector(".btn-form-signUp");
  const formData = new FormData(event.target,btnSubmit)
  const req = await fetch("/signUp",{
    method:"POST",
    body:formData
  })
  const res = await req.json();
  if (req.ok) {
    const textError = document.querySelector(".error-message-signup").innerHTML = ""
    location.reload()
  }
  else {
  const textError = document.querySelector(".error-message-signup").innerHTML = res.message 
}
  console.log(res)
  
})