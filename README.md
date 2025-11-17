#  Backoffice - 1er Avance Proyecto Final

## Descripción
Este proyecto es un **sistema de backoffice** con temática inspirada en **Minecraft**, desarrollado con HTML, CSS y JavaScript.  
Incluye **tres vistas principales**:

- **Login** – Página de inicio de sesión.  
- **Register** – Página para crear una cuenta nueva.  
- **Home** – Página protegida que redirige a Login si no hay sesión activa.

Todas las vistas son **responsivas**, adaptándose a distintos tamaños de pantalla.


## Funcionalidades

- Navegación entre **Login** y **Register**.  
- Página **Home** protegida con redirección a Login.  
- Validación básica de formularios con HTML5 y JavaScript.  
- Diseño simple, inspirado en el **menú de Minecraft**.  

#2do Avance – Funcionalidad con API y CRUD Completo

## En este avance se añadió lógica completa con JavaScript, conectando el proyecto a la API:

https://portfolio-api-three-black.vercel.app/api/v1

🔐 Autenticación
✔ Registro – POST /auth/register

Se agregó la funcionalidad para registrar usuarios desde la vista Register.

Se envían los datos requeridos: name, email, itsonId, password.

Tras un registro exitoso se redirige automáticamente a Login.

✔ Inicio de Sesión – POST /auth/login

Validación de credenciales con la API.

Si el login es exitoso:

Se guarda el token en localStorage.

Se redirige al Home.

✔ Protección de Ruta

La vista Home solo es accesible con token válido.

Si no existe token, se redirige automáticamente a Login.

📂 CRUD de Proyectos (Home)
✔ Obtener proyectos – GET /projects

Se cargan automáticamente al entrar a Home.

Se muestran en tarjetas con:

Título

Descripción

Tecnologías

Enlace al repositorio

✔ Crear proyecto – POST /projects

Formulario para agregar proyectos.

Actualiza la lista de manera automática.

✔ Editar proyecto – PUT /projects/:id

Formulario de edición con los datos del proyecto seleccionado.

Actualiza la lista después de guardar cambios.

✔ Eliminar proyecto – DELETE /projects/:id

Cada tarjeta tiene su botón de eliminar.

Se actualiza la vista tras la eliminación.


## Visualización Online

https://lolo456sjhs.github.io/backoffice/

Humberto Barreras Carrisoza
id:00000252072
