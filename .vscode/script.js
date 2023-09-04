function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //A baixo esta outra forma de fazer o que foi feito á cima para ficar mais facil o entendimento
  // if (html.classList.contains("light")) {
  // html.classList.remove("light")
  //} else {
  // html.classList.add("light")
  // }

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adcionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
