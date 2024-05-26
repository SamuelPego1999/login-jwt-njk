document
  .querySelector(".form-signIn")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const btnSubmit = document.querySelector(".btn-form-signIn");
    const formData = new FormData(event.target, btnSubmit);
    const spinner = document.querySelectorAll(".spinner")[0]
    spinner.classList.remove("invisible")
    btnSubmit.classList.add("invisible");
    const req = await fetch("/signIn", {
      method: "POST",
      body: formData,
    });
    
    const res = await req.json();
    
    if (req.ok) {
      spinner.classList.add("invisible")
  btnSubmit.classList.remove("invisible");
      const inputs = document.querySelectorAll("input")
      const textError = document.querySelector(".error-message-signin")
      textError.innerHTML = res.message
      textError.classList.toggle("text-danger",false)
      inputs.forEach(input => input.value = "")
     
    }
    else {
    spinner.classList.add("invisible")
    btnSubmit.classList.remove("invisible");
    const textError = document.querySelector(".error-message-signin")
    textError.innerHTML = res.message 
    textError.classList.toggle("text-danger",true)
    
  }
    console.log(res);
    if (res.redirect) {
      location.href = res.redirect;
    }
  });
