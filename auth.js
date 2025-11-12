function login(e) {
  e.preventDefault();
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  const storedUser = localStorage.getItem("user");
  const storedPass = localStorage.getItem("pass");

  if (user === storedUser && pass === storedPass) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "home.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}

function register(e) {
  e.preventDefault();
  const user = document.getElementById("newUser").value;
  const pass = document.getElementById("newPass").value;

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);
  alert("Registro exitoso. Ahora puedes iniciar sesión.");
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

if (window.location.pathname.endsWith("home.html")) {
  const loggedIn = localStorage.getItem("loggedIn");
  if (!loggedIn) {
    window.location.href = "index.html";
  }
}
