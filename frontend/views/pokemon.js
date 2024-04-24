export default function(root, [id]) {

  console.log("params", id)

  root.innerHTML = `
    <h1>Pokemon #${id}</h1>
    <a href="#/pokedex">Pokedex</a>
  `
}