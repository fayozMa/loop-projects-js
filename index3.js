function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Replace "username" and "password" with your actual credentials
  if (username === "username" && password === "password") {
    window.location.href = "http://127.0.0.1:5500/index.html"; // Redirect to index.html
  } else {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "Username yoki password Xato";
  }
}

  