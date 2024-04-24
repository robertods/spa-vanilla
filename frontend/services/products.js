import * as req from '../utils/request.js'
const URL_API = 'http://localhost:3000'

export async function obtenerTodosLosProductos() {
  return await req.get(URL_API+'/products')
}

export async function obtenerProductoPorId(id) {
  return await req.get(URL_API+'/products/'+id)
}

export async function crearProducto(producto){
  return await req.post(URL_API+'/products', producto)
}

export async function editarProducto(id, producto){
  return await req.put(URL_API+'/products/'+id, producto)
}
