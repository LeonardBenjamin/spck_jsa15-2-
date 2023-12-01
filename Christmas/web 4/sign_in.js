document.addEventListener("DOMContentLoaded", function () {
  const nameSignin = document.querySelector(".nameSignin");
  const passSignin = document.querySelector(".passSignin");
  const pressSignin = document.querySelector(".pressSignin");

  pressSignin.addEventListener("click", function () {
    const storedName = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");

    const inputName = nameSignin.value;
    const inputPass = passSignin.value;

    if (inputName === storedName && inputPass === storedPass) {
      alert("Login successful!");
      window.location.href = "../web 1/index.html"; // Redirect to index.html
    } else {
      alert("Invalid username or password. Please try again.");
      // You can optionally clear the input fields here
    }
  });
});
