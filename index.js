const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
const contador = document.querySelector(".contador");
let ContadorDeItens = 0;

button.addEventListener("click", function () {
    let ValorDigitado = input.value;
    if(ValorDigitado === ""){
        return alert ("You haven't added an item.");
        
    }
    const ItemAdd = document.createElement("li");
    ItemAdd.innerText = ValorDigitado;
    ul.appendChild(ItemAdd);
    
    ContadorDeItens++;
    contador.innerText = ContadorDeItens;

    input.value = "";
})

