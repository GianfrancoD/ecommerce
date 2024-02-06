const boton = document.querySelector("#carrito");
const botones2 = document.querySelector("#carrito2");
const botones3 = document.querySelector("#carrito3");
const botones4 = document.querySelector("#carrito4");
const botones5 = document.querySelector("#carrito5");
const botones6 = document.querySelector("#carrito6");
boton.addEventListener("mouseover", function(){
    if (boton) {
        boton.innerHTML = "Show more this product";
    }
});
const boton2 = document.querySelector("#carrito");
boton2.addEventListener("mouseout", function(){
    boton.innerHTML = "$99.99";
});


botones2.addEventListener("mouseover", function(){
    if (botones2) {
        botones2.innerHTML = "Show more this product";
    }
});
botones2.addEventListener("mouseout", function(){
    botones2.innerHTML = "$99.99";
});

botones3.addEventListener("mouseover", function(){
    if (botones3) {
        botones3.innerHTML = "Show more this product";
    }
});
botones3.addEventListener("mouseout", function(){
    botones3.innerHTML = "$99.99";
});

botones4.addEventListener("mouseover", function(){
    if (botones4) {
        botones4.innerHTML = "Show more this product";
    }
});
botones4.addEventListener("mouseout", function(){
    botones4.innerHTML = "$99.99";
});

botones5.addEventListener("mouseover", function(){
    if (botones5) {
        botones5.innerHTML = "Show more this product";
    }
});
botones5.addEventListener("mouseout", function(){
    botones5.innerHTML = "$99.99";
});

botones6.addEventListener("mouseover", function(){
    if (botones6) {
        botones6.innerHTML = "Show more this product";
    }
});
botones6.addEventListener("mouseout", function(){
    botones6.innerHTML = "$99.99";
});