export function style(elem, css) {
  const styleTag = document.createElement("style")
  const className = 'component-' + Math.round(Math.random()*1000)
  styleTag.innerHTML = css.replace(/@/g, '.'+className)
  elem.className = className
  elem.appendChild(styleTag)
}

export function template(elem, html) {
  elem.innerHTML = html
}