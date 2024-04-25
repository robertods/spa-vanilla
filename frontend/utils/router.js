import notFound from '../views/notFound.js'
import loader from '../components/loader.js'

const root = document.getElementById('app')

export default async function (e) {
  const { hash } = window.location

  let [ , view, ...params] = hash.split('/') // ["#", "pokemon", "25", "edit"]

  view = view || "home"

  try {
    root.innerHTML = loader()

    /*
      /products           views/products/index.js
      /products/import    views/products/import.js
      /products/new       views/products/new.js
      /products/10        views/products/[id].js
      /products/2/edit    views/products/edit.js
      /products/2/export  views/products/export.js
    */

    const [id, action] = params
    const fileName = action ? action : isNumber(id) ? "[id]" : id ? id : "index"
    //const fileName = detectFileName(id, action)
    const { default: renderView } = await import(`../views/${view}/${fileName}.js`)
    renderView(root, id)
  }
  catch(err){
    console.log(err)
    notFound(root)
  }

}

function isNumber(nro){
  return nro && nro.match(/[0-9]+/)
}

export function goToView(newDestiny) {
  window.location.href = newDestiny
}
