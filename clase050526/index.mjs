import express from "express"
import { obtenerProductos, obtenerProductoPorId } from './funciones.mjs'

const PUERTO = 3000
const app = express()

// todos los productos
app.get('/api/v1/productos', obtenerProductos)

// producto por id
app.get('/api/v1/productos/:id', obtenerProductoPorId)

app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})

//POST/api/v1/productos-->dar de alta un nuevo producto

//PUT/api/v1/productos/id: -->modificar un producto

//DELETE/api/v1/productos/id:-->eliminar