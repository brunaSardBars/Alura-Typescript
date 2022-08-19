import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if(form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error("Não foi possivel inicializar a aplicação. Verifique se o formulário está nulo.")
}

const botaoImporta = document.querySelector('#botao-importar');
if(botaoImporta) {
    botaoImporta.addEventListener('click', ()=> {
        controller.importarDados();
    });
}else{
    throw Error("Botão importa não encontrado");
}
