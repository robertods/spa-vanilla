import { obtenerTodosLosProductos } from '../../services/products.js'
import productCard from '../../components/productCard.js'

export default async function(root) {
  const productos = await obtenerTodosLosProductos()
  console.log('productos', productos)

  root.innerHTML = `
    <h1>Productos</h1>
    <ul>${productos.map(productCard).join('')}</ul>
  `
}
