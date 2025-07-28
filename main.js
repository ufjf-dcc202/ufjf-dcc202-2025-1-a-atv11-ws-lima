import {adicionaLista, getLista, limpaLista} from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");

atualizarLista();

function atualizarLista(){
    olItens.innerHTML = "";
    let lista = getLista();
    for (let i = 0; i<lista.length; i++){
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
    }

    btnLimpar.addEventListener('click', limparItensDeLista);
    btnAdicionar.addEventListener('click', adicionarItensNaLista);

    atualizarLista();

    function limparItensDeLista(){
        limpaLista();
        atualizarLista();
    }


    function adicionarItensNaLista(){
        const novoItem = pEntrada.textContent;
        adicionaLista(novoItem);
        atualizarLista();
    }