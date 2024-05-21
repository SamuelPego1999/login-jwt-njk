document
  .querySelector(".form-signIn")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const btnSubmit = document.querySelector(".btn-form-signIn");
    const formData = new FormData(event.target, btnSubmit);
    const req = await fetch("/signIn", {
      method: "POST",
      body: formData,
    });
    const res = await req.json();
    if (req.ok) {
      const textError = (document.querySelector(".error-message-signin").innerHTML =
        "");
    } else {
      const textError = (document.querySelector(".error-message-signin").innerHTML =
        res.message);
    }
    console.log(res);
    if (res.redirect) {
      location.href = res.redirect;
    }
  });
