import { editarProducto, obtenerProductoPorId } from "../../services/products.js"
import { goToView } from '../../utils/router.js'
import productForm from '../../components/productForm.js'

export default async function(root, id) {
  
  const producto = await obtenerProductoPorId(id)
  
  // template
  root.innerHTML = `
    <h1>Editando Producto</h1>
    ${await productForm(producto)}
  `
  //script
  const form = root.querySelector("form")
  form.addEventListener('submit', enviarFormulario)
  //form.elements.cat.value = cat
}

async function enviarFormulario(e) {
  e.preventDefault()
  const { id:{value:id}, name, price, cat } = e.target.elements
  const productoEditado = {
    name: name.value,
    price: parseFloat(price.value),
    cat: parseInt(cat.value)
  }

  await editarProducto(id, productoEditado)
  goToView('#/products')
}