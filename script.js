/*O Document Object Model ou simplesmente DOM é utilizado pelo navegador Web para representar a sua página Web. 
Quando altera-se esse modelo com o uso do Javascript altera-se também a página Web. É muito mais fácil trabalhar 
com DOM do que diretamente com código HTML ou CSS. Um dos grandes responsáveis por isso tudo é o objeto document 
que é responsável por conceder ao código Javascript todo o acesso a árvore DOM do navegador Web. A  declaração 
const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o 
valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída*/

const logo = document.querySelector("img");                          // Document corresponde ao nosso HTML com a img
const lista = document.querySelector("ul");                          // Aqui estamos preparando o "ul"
const roleta = document.querySelector("main img");                    // Aqui estamos preparando a IMG da MAIN

/* <><><><><><><><><><><><><><><><><><><><><>< --- FUNÇÕES --- <><><><><><><><><><><><><><><><><><><><><><><><><><><> */


/*  Função MENU ................................... */

function abrirMenu(){                                               // Declarando a função de ação do menu

    //-----------------------------------------Condição Lógica -------------------------------------------------------
    /*
    if(lista.classList.contains("ativo")){                          // Condição inicial da classe (se conter ativo)
        lista.classList.remove("ativo");                            // Se estiver ativo, vai remover
    }else{
        lista.classList.add("ativo");                               // Se estiver retirado, vai adicionar
    }  
    */

/* Para não usar essa lógica toda, pode usar a função TOGGLE*, que alternará */
   lista.classList.toggle("ativo"); 
}



/*  Função ROLETA ................................... */

function rodaARODA(){
    roleta.classList.toggle("roda-jequiti")
}
logo.onclick = abrirMenu;                                          // Atribuindo função 
roleta.onclick = rodaARODA;
