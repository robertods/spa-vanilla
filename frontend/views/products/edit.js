
export default async function(root, id) {
  root.innerHTML = `
    <h1>Producto ${id}</h1>
    <p>Edit</p>
  `
}