import { obtenerTodosLosProductos } from '../../services/products.js'
import productCard from '../../components/productCard.js'
import { template, style } from '../../utils/component.js'

export default async function(root) {
  const productos = await obtenerTodosLosProductos()
  console.log(productos)

  template(root, `
    <h1>Productos</h1>
    <a href="#/products/new">Crear nuevo producto</a>
    <div>${productos.map(productCard).join('')}</div>
  `)

  style(root, `
    @ {
      background-color: lime;
    }
    @ h1 {
      color: red;
    }
  `)

  // script

}
