// quando clicarmo em um botao, devemos mostrar a imagem de fundo corresppndente ao botao que clicamos



const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.selecionado')
        botaoSelecionado.classList.remove('selecionado')

        botao.classList.add('selecionado')

        const imagemAtiva = document.querySelector('.ativo');
        imagemAtiva.classList.remove('ativo');

        imagens[indice].classList.add('ativo');
    })
})