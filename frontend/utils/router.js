import notFound from '../views/notFound.js'

const root = document.getElementById('app')

export default async function (e) {
  const { hash } = window.location

  let [ , view, ...params] = hash.split('/')

  view = view || "home"

  try {
    const [id, action] = params
    const file = action ? action : isNumber(id) ? "[id]" : id ? id : 'index'
    const { default: renderView } = await import(`../views/${view}/${file}.js`)
    renderView(root, id)
  }
  catch(err){
    console.log(err)
    notFound(root)
  }

}

function isNumber(nro) {
  return nro && nro.match(/[0-9]+/)
}
