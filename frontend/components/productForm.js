import categoriaOption from './categoriaOption.js'
import { obtenerTodasLasCategorias } from '../services/categories.js'

export default async function({id='', name='', price='', cat=''}) {
  const categorias = await obtenerTodasLasCategorias()

  return `
  <form>
    <input type="hidden" name="id" value="${id}">
    <label>
      Nombre <input name="name" value="${name}" />
    </label>
    <label>
      Precio <input name="price" value="${price}" />
    </label>
    <label>
      Categoría
      <select name="cat">
        <option value="none">Ninguna</option>
        ${categorias.map(c => categoriaOption(c, cat)).join('')}
      </select>
    </label>
    
    <button>Guardar</button>
  </form>
  `
}