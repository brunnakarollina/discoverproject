function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")
  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de Brunna Karollina usando uma roupa azul escuro com bolinhas brancas, com o cabelo liso e curto em uma tonalidade ruivo claro.')
  }
  else {
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'Foto de Brunna Karollina sorrindo com o cabelo cacheado e de tonalidade ruiva.')
  }
}