let contador = 0;

//selecionar valor e botoes
const valor = document.querySelector('#valor');
const botaoDim = document.querySelector('.diminuir');
const botaoZerar = document.querySelector('.zerar');
const botaoAum = document.querySelector('.aumentar');

botaoDim.addEventListener('click', function (){
    contador--;
    return valor.textContent = contador;
})

botaoAum.addEventListener('click', function(){
    contador++;
    return valor.textContent = contador;
})

botaoZerar.addEventListener('click', function(){
    contador = 0;
    return valor.textContent = contador;
})
