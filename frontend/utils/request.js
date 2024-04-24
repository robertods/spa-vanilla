
async function request(method, url, objectData) {
  const response = await fetch(url, {
    method,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(objectData)
  })
  const json = await response.json()
  return json
}

export async function get(url) {
  const response = await fetch(url)
  const json = await response.json()
  return json
}

export async function post(url, objectData) {
  return await request('post', url, objectData)
}

export async function put(url, objectData) {
  return await request('put', url, objectData)
} 
