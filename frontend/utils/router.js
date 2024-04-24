import notFound from '../views/notFound.js'

const root = document.getElementById('app')

export default async function (e) {
  const { hash } = window.location

  let [ , view, ...params] = hash.split('/') // ["#", "pokemon", "25"]

  view = view || "home"

  try {
    const { default: renderView } = await import(`../views/${view}.js`)
    renderView(root, params)
  }
  catch(err){
    console.log(err)
    notFound(root)
  }

}
