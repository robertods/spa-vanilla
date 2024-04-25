import productCard from "../../components/productCard.js"
import { obtenerProductoPorId } from "../../services/products.js"

export default async function(root, id) {
  const producto = await obtenerProductoPorId(id)
  
  root.innerHTML = `
    <h1>${producto.name}</h1>
    ${productCard(producto)}

    <a href="#/products">Volver a listado de productos</a>
  `
}