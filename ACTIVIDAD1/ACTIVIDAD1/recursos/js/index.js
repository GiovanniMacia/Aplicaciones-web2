
/**
 * Muestra un mensaje de estado en la interfaz.
 * @param {string} tipo  - "exito" o "error"
 * @param {string} texto - Mensaje a mostrar al usuario
 */
function mostrarMensaje(tipo, texto) {
  // Si ya existe un mensaje previo, lo eliminamos
  const previo = document.getElementById("mensaje-estado");
  if (previo) previo.remove();

  const mensaje = document.createElement("div");
  mensaje.id = "mensaje-estado";
  mensaje.classList.add("mensaje", `mensaje--${tipo}`);

  const icono = tipo === "exito" ? "✔" : "✖";
  mensaje.innerHTML = `<span class="mensaje__icono">${icono}</span> ${texto}`;

  // Insertamos el mensaje antes del contenedor de productos
  const contenedor = document.getElementById("contenedor");
  contenedor.parentElement.insertBefore(mensaje, contenedor);
}



async function obtenerDatos() {
  const contenedor = document.getElementById("contenedor");

  try {
    // Se realiza la solicitud con fetch y se espera la respuesta 
    const response = await fetch("recursos/datos/productos.json");

    // Verificación del objeto Response: si la respuesta no fue exitosa, lanzamos un error
    if (!response.ok) {
      throw new Error(
        `Error en la respuesta del servidor: ${response.status} ${response.statusText}`
      );
    }

    // Se parsea el cuerpo de la respuesta como JSON (también es una promesa)
    const productos = await response.json();

    // Se vacía el contenedor antes de renderizar los datos reales
    contenedor.innerHTML = "";

    // Se recorre el array de productos y se crea un artículo por cada uno
    productos.forEach((producto) => {
      const articulo = document.createElement("article");
      articulo.classList.add("producto");

      articulo.innerHTML = `
        <h3 class="nombre">${producto.nombre}</h3>
        <data class="precio" value="${producto.precio}">Precio: $${producto.precio.toFixed(2)}</data>
        <data class="stock" value="${producto.stock}">Stock: ${producto.stock} unidades</data>
      `;

      contenedor.appendChild(articulo);
    });

  } catch (error) {
    // En caso de error de red o de parseo, se muestra un mensaje en el contenedor
    contenedor.innerHTML = `<p style="color: red;">No se pudieron cargar los productos: ${error.message}</p>`;
    console.error("Error al obtener los datos:", error);
  }
}

// Se llama a la función cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", obtenerDatos);
