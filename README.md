# Avances del proyecto Final

##  1er Avance – Descripción  
Este proyecto es un **sistema de backoffice** con temática inspirada en **Minecraft**, desarrollado con **HTML, CSS y JavaScript**.  
Incluye **tres vistas principales**:

- **Login** – Página de inicio de sesión.  
- **Register** – Página para crear una cuenta nueva.  
- **Home** – Página protegida que redirige a Login si no hay sesión activa.

Todas las vistas son **responsivas**, adaptándose a distintos tamaños de pantalla.

###  Funcionalidades del 1er Avance
- Navegación entre **Login** y **Register**.  
- Página **Home** protegida con redirección a Login.  
- Validación básica de formularios con HTML5 y JavaScript.  
- Diseño simple, inspirado en el **menú de Minecraft**.  

---

## 2do Avance – Proyecto Final
**Requisitos cumplidos:**
- Se añadió funcionamiento con JavaScript al proyecto backoffice.  
- Se implementó registro de usuarios con **POST /auth/register** desde la vista Register.  
- Se implementó inicio de sesión con **POST /auth/login**:  
  - Se guarda el token en `localStorage`.  
  - Redirige al Home al iniciar sesión correctamente.  
- Se habilitó acceso a Home únicamente con token válido.  
- En Home se agregaron elementos visuales para el CRUD de proyectos:  
  - Panel para mostrar proyectos registrados  
  - Botón y formulario para agregar proyecto  
  - Plantilla de proyecto con botones de eliminar y actualizar  

---

## 3er Avance – Proyecto Final
**Requisitos cumplidos:**
- Se completó la funcionalidad del CRUD de proyectos con la API:  
  - **GET /projects**  
  - **GET /projects/:projectId**  
  - **POST /projects**  
  - **PUT /projects/:projectId**  
  - **DELETE /projects/:projectId**  
- Se protegieron las rutas usando el token en headers.  
- Backoffice permite:  
  - Registrar usuarios  
  - Iniciar sesión con usuarios registrados  
  - Agregar proyectos para el usuario que inició sesión  
  - Editar proyectos  
  - Eliminar proyectos  
  - Visualizar los proyectos agregados  
- Se habilitó opción de **cerrar sesión**.  

---


## Visualización Online

https://lolo456sjhs.github.io/backoffice/

Humberto Barreras Carrisoza
id:00000252072
