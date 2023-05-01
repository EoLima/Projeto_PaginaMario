const botaoTrailer = document.querySelector(".botao-trailer")
const modal = document.querySelector(".modal")
const fechar = document.querySelector(".fechar-modal")
const video = document.getElementById("video")
const link = video.src

function alternarModal() {
  modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", () => {
  alternarModal()
  video.setAttribute("src", link)
})

fechar.addEventListener("click", () => {
  alternarModal()
  video.setAttribute("src", "")
})
