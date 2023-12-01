document.addEventListener("DOMContentLoaded", function () {
  const nameSignup = document.querySelector(".nameSignup");
  const passSignup = document.querySelector(".passSignup");
  const pressSignup = document.querySelector(".pressSignup");

  pressSignup.addEventListener("click", function () {
    const inputName = nameSignup.value;
    const inputPass = passSignup.value;

    if (inputName && inputPass) {
      localStorage.setItem("username", inputName);
      localStorage.setItem("password", inputPass);
      alert("Account created successfully!");
      // You can redirect or perform other actions after successful signup
    } else {
      alert("Please fill in all fields");
    }
  });
});
