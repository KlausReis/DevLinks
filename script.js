/* 
  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }
*/
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light-klaus.png")
  } else {
    // se tiver sem o light mode, manter a imagem normal.
    img.setAttribute("src", "./assets/avatar-dark.png")
  }
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Claudio Geovane, olhando para a câmera sério, usando óculos escuros, com um eketé azul, jaqueta de couro preto, com o fundo da imagem azul celeste"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Claudio Geovane, olhando para a câmera sério, usando óculos escuros, com um eketé azul, jaqueta de couro preto, com o fundo da imagem de por-do-sol e uma ponte"
    )
  }
}
