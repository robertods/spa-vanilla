export default function({id, name}, selected) {
  return `<option value="${id}" ${selected === id ? "selected" : ''}>${name}</option>`
}