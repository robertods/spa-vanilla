export default function({id, name, price}){
  return `
  <p style="border: 1px solid gray;padding:10px;">
    <a href="#/products/${id}">${name}</a>
    <span>$${price}</span>
    <a href="#/products/${id}/edit">Editar</a>
  </p>
  `
}