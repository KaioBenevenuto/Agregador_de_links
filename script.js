function toggleMode() {
  //Para acessar a tag html do documento, é preciso colocar document.documentElement
  //document - se refere ao documento inteiro
  //documentElement - a tag html do documento
  const html = document.documentElement

  //if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  //} else {
  //   html.classList.add("light")
  //}

  //toggle() - faz mais ou menos a mesma coisa que o if acima, se tiver "light" na class ele apaga se não tiver ele adiciona
  html.classList.toggle("light")

  //querySelector() - pesquisa pelo seletor
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    //setAttribute() - essa função serve para mudar o valor de um atributo
    img.setAttribute("src", "assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuros e jaqueta preta, sem barba e com o fundo meio roxo e meio azulado"
    )
  } else {
    img.setAttribute("src", "assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
    )
  }
}