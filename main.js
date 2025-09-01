const personagem = document.querySelector('.personagem')
const personagemAtaque = document.querySelector('.personagem-ataque')

class Personagem {
    constructor() {
        this.posicaoX = 0;
        this.posicaoY = 0;
        this.movimento = null

        this.movimentoAtaque = 20;
        this.atacando = false;
    }

    iniciar() { }

    verifciarPosicao() {
        if (this.posicaoX <= 0) {
            this.posicaoX = 10
        }
        if (this.posicaoX >= 500) {
            this.posicaoX = 500
        }
        if (this.posicaoY <= 0) {
            this.posicaoY = 10
        }
        if (this.posicaoY >= 500) {
            this.posicaoY = 500
        }
    }

    moverPersonagem(tecla, personagem) {

        this.verifciarPosicao()

        const direcao = {
            esquerda: 37,
            cima: 38,
            direita: 39,
            baixo: 40
        }

        switch (tecla) {
            case 37:
                this.posicaoX -= 10;
                personagem.style.left = this.posicaoX + "px"
                personagem.style.bottom = this.posicaoY + "px"
                personagem.style.transform = "scaleX(-1)"
                break;
            case 38:
                this.posicaoY += 10;
                personagem.style.left = this.posicaoX + "px"
                personagem.style.bottom = this.posicaoY + "px"
                personagem.style.transform = "rotate(-90deg)"

                break;
            case 39:
                this.posicaoX += 10;
                personagem.style.left = this.posicaoX + "px"
                personagem.style.bottom = this.posicaoY + "px"
                personagem.style.transform = "scaleX(1)"
                break;
            case 40:
                this.posicaoY -= 10;
                personagem.style.left = this.posicaoX + "px"
                personagem.style.bottom = this.posicaoY + "px"
                personagem.style.transform = "rotate(90deg)"
                break;
            default:
                break;
        }
    }

    atacar(ataque) {
        var contador = 0;
        if (this.atacando) return;

        this.atacando = true

        var loop = setInterval(() => {
            this.movimentoAtaque = contador;
            ataque.style.left = this.movimentoAtaque + "px"
            ataque.style.backgroundColor = 'red'
            contador += 10;
        }, 10)

        setTimeout(() => {
            clearInterval(loop);
            this.atacando = false;
            this.movimentoAtaque = 20;
            ataque.style.left = this.movimentoAtaque + "px"
            ataque.style.backgroundColor = 'transparent'
        }, 300)
    }
}

const jogador = new Personagem();

window.addEventListener('keydown', (e) => {
    const tecla = e.keyCode
    console.log(tecla)
    jogador.moverPersonagem(tecla, personagem)

    if (tecla == 32) {
        jogador.atacar(personagemAtaque)
    }
})