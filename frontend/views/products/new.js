import { crearProducto } from "../../services/products.js"
import { goToView } from '../../utils/router.js'
import productForm from '../../components/productForm.js'

export default async function(root) {
  // template
  root.innerHTML = `
    <h1>Nuevo Producto</h1>
    ${await productForm({})}
  `
  //script
  const form = root.querySelector("form")
  form.addEventListener('submit', enviarFormulario)

}

async function enviarFormulario(e) {
  e.preventDefault()
  const { name, price, cat } = e.target.elements
  const nuevoProducto = {
    name: name.value,
    price: parseFloat(price.value),
    cat: parseInt(cat.value)
  }

  await crearProducto(nuevoProducto)
  goToView('#/products')
}