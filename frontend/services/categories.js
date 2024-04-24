import { get } from '../utils/request.js'
const URL_API = 'http://localhost:3000'

export async function obtenerTodasLasCategorias() {
  return await get(URL_API+'/categories')
}
