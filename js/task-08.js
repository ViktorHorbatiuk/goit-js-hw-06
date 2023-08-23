const formOfLogin = document.querySelector(".login-form");

formOfLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputOfEmail = formOfLogin.elements.email;
  const inputOfPassword = formOfLogin.elements.password;

  if (inputOfEmail.value === "" || inputOfPassword.value === "") {
    alert("Please fill in all the fields!");
  } else {
    const formData = {
      email: inputOfEmail.value,
      password: inputOfPassword.value,
    };

    console.log(formData);
    formOfLogin.reset();
  }
});
