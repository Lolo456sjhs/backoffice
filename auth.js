const API_BASE = "https://portfolio-api-three-black.vercel.app/api/v1";

let editingProjectId = null;

async function register(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const itsonId = document.getElementById("itsonId").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, itsonId, password })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Error al registrar");

    alert("Registro exitoso. Ahora inicia sesión.");
    window.location.href = "index.html";

  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

async function login(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (!res.ok) {
      alert("Error al iniciar sesión: " + (data.message || "Login fallido"));
      return;
    }

    localStorage.setItem("authToken", data.token);
    window.location.href = "home.html";

  } catch (err) {
    console.error(err);
    alert("Error al conectar con la API: " + err.message);
  }
}

function logout() {
  localStorage.removeItem("authToken");
  window.location.href = "index.html";
}

if (window.location.pathname.endsWith("home.html")) {
  const token = localStorage.getItem("authToken");
  if (!token) {
    window.location.href = "index.html";
  } else {
    fetchProjects();
  }
}

function showAddProjectForm() {
  document.getElementById("add-project-form").style.display = "block";
}

async function fetchProjects() {
  const token = localStorage.getItem("authToken");
  try {
    const res = await fetch(`${API_BASE}/projects`, {
      headers: { "auth-token": token }
    });
    if (!res.ok) throw new Error("Error al obtener proyectos");
    const projects = await res.json();
    renderProjects(projects);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

function renderProjects(projects) {
  const list = document.getElementById("projects-list");
  list.innerHTML = "";

  projects.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("project-card");
    div.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <p>Tecnologías: ${p.technologies.join(", ")}</p>
      <p>Repositorio: <a href="${p.repository}" target="_blank">GitHub</a></p>
      <button class="mc-button" onclick="startEdit('${p._id}', '${p.title}', '${p.description}', '${p.technologies.join(",")}', '${p.repository}')">Editar</button>
      <button class="mc-button" onclick="deleteProject('${p._id}')">Eliminar</button>
    `;
    list.appendChild(div);
  });
}

async function addProject() {
  const token = localStorage.getItem("authToken");
  const title = document.getElementById("project-title").value;
  const description = document.getElementById("project-description").value;
  const technologies = document.getElementById("project-tech").value.split(",").map(t => t.trim());
  const repository = document.getElementById("project-repo").value;

  try {
    const res = await fetch(`${API_BASE}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      },
      body: JSON.stringify({ title, description, technologies, repository })
    });
    if (!res.ok) throw new Error("Error al crear proyecto");
    document.getElementById("project-title").value = "";
    document.getElementById("project-description").value = "";
    document.getElementById("project-tech").value = "";
    document.getElementById("project-repo").value = "";
    fetchProjects();
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

// ----------------------- ELIMINAR PROYECTO -----------------------
async function deleteProject(id) {
  const token = localStorage.getItem("authToken");
  try {
    const res = await fetch(`${API_BASE}/projects/${id}`, {
      method: "DELETE",
      headers: { "auth-token": token }
    });
    if (!res.ok) throw new Error("Error al eliminar proyecto");
    fetchProjects();
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

// ----------------------- EDITAR PROYECTO -----------------------
function startEdit(id, title, description, tech, repo) {
  editingProjectId = id;
  document.getElementById("edit-project-form").style.display = "block";
  document.getElementById("edit-project-title").value = title;
  document.getElementById("edit-project-description").value = description;
  document.getElementById("edit-project-tech").value = tech;
  document.getElementById("edit-project-repo").value = repo;
  document.getElementById("add-project-form").style.display = "none";
}

function cancelEdit() {
  editingProjectId = null;
  document.getElementById("edit-project-form").style.display = "none";
  document.getElementById("add-project-form").style.display = "block"; // Mostrar formulario de agregar
}

async function updateProject() {
  const token = localStorage.getItem("authToken");
  const title = document.getElementById("edit-project-title").value;
  const description = document.getElementById("edit-project-description").value;
  const technologies = document.getElementById("edit-project-tech").value.split(",").map(t => t.trim());
  const repository = document.getElementById("edit-project-repo").value;

  try {
    const res = await fetch(`${API_BASE}/projects/${editingProjectId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      },
      body: JSON.stringify({ title, description, technologies, repository })
    });
    if (!res.ok) throw new Error("Error al actualizar proyecto");
    cancelEdit();
    fetchProjects();
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}
