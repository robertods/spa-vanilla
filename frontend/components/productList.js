import { obtenerTodosLosProductos } from '../services/products.js'
import productCard from './productCard.js'

export default async function() {
  const productos = await obtenerTodosLosProductos()
  console.log('productos', productos)

  return `
    <h1>Productos</h1>
    <ul>${productos.map(productCard).join('')}</ul>
  `  
}