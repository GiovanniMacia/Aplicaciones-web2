import express from "express"

const app = express()
const PUERTO = 3000

app.use(express.json()) // SOLO esto es suficiente

let productos = [
  { id: 1, nombre: "camisa", precio: 200 },
  { id: 2, nombre: "pantalon", precio: 300 }
]

// GET todos
app.get("/productos", (req, res) => {
  res.json(productos)
})

// GET por ID
app.get("/productos/:id", (req, res) => {
  const id = Number(req.params.id)

  const producto = productos.find(p => p.id === id)

  if (!producto) {
    return res.status(404).json({ error: "Artículo no encontrado" })
  }

  res.json(producto)
})

// POST agregar producto
app.post("/productos", (req, res) => {
  const nuevo = req.body

  nuevo.id = productos.length + 1
  productos.push(nuevo)

  res.status(201).json({
    mensaje: "Producto agregado",
    producto: nuevo
  })
})

app.listen(PUERTO, () => {
  console.log("Servidor en http://localhost:" + PUERTO)
})