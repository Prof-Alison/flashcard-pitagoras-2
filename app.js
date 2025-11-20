function criaCartao(imagemFrente, imagemVerso, index) {
  const container = document.getElementById('container')
  const cartao = document.createElement('article')
  cartao.className = 'cartao'

  cartao.innerHTML = `
    <div class="cartao__conteudo">
      <div class="cartao__face cartao__frente">
        <img src="${imagemFrente}" alt="Frente do cartão">
      </div>
      <div class="cartao__face cartao__verso">
        <img src="${imagemVerso}" alt="Verso do cartão">
      </div>
    </div>
  `

  let estado = 0 // 0 = normal, 1 = fullscreen, 2 = fullscreen virada

  cartao.addEventListener('click', () => {
    if (estado === 0) {
      // 1º clique → entra em tela cheia
      cartao.classList.add('fullscreen')
      estado = 1
    } else if (estado === 1) {
      // 2º clique → vira a carta
      cartao.classList.add('active')
      estado = 2
    } else if (estado === 2) {
      // 3º clique → desvira e sai do fullscreen
      cartao.classList.remove('active')
      setTimeout(() => {
        cartao.classList.remove('fullscreen')
      }, 300) // espera a animação de virar terminar
      estado = 0
    }
  })

  container.appendChild(cartao)
}