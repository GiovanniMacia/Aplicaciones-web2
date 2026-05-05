import productos from "./productos.mjs"

export function obtenerProductos(req, res) {
  res.json(productos)
}

export function obtenerProductoPorId(req, res) {
  const { id } = req.params

  const producto = productos.find(p => p.id === id)

  if (!producto) {
    return res.status(404).json({ mensaje: "Producto no encontrado" })
  }

  res.json(producto)
}