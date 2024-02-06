//! Variable del precio
const boton = document.querySelector("#carrito");
const botones2 = document.querySelector("#carrito2");
const botones3 = document.querySelector("#carrito3");
const botones4 = document.querySelector("#carrito4");
const botones5 = document.querySelector("#carrito5");
const botones6 = document.querySelector("#carrito6");

//TODO > variables de corazon 
const heart = document.getElementById("heart");
const heart2 = document.getElementById("heart2");
const heart3 = document.getElementById("heart3");
const heart4 = document.getElementById("heart4");
const heart5 = document.getElementById("heart5");
const heart6 = document.getElementById("heart6");

//! Se denega la entrada a cualquier persona que por casualidad pueda darle Click al boton
const denegado = document.getElementById("sign-in");
denegado.addEventListener("click", function(e){
    if (!denegado || denegado) {
        e.preventDefault();
        alert("In Progress");
    }
});

boton.addEventListener("mouseover", function(){
    if (boton) {
        boton.innerHTML = "Show more this product";
        boton.style.color = "orange";
        boton.style.cursor = "pointer";
    }
});
boton.addEventListener("mouseout", function(){
    boton.innerHTML = "$20.99";
    boton.style.color = "black";
});
botones2.addEventListener("mouseover", function(){
    if (botones2) {
        botones2.innerHTML = "Show more this product";
        botones2.style.color = "orange";
        botones2.style.cursor = "pointer";
    }
});
botones2.addEventListener("mouseout", function(){
    botones2.innerHTML = "$10.99";
    botones2.style.cursor = "pointer";
    botones2.style.color = "black";
});

botones3.addEventListener("mouseover", function(){
    if (botones3) {
        botones3.innerHTML = "Show more this product";
        botones3.style.color = "orange";
        botones3.style.cursor = "pointer";

    }
});
botones3.addEventListener("mouseout", function(){
    botones3.innerHTML = "$20.99";
    botones3.style.cursor = "pointer";
    botones3.style.color = "black";
});

botones4.addEventListener("mouseover", function(){
    if (botones4) {
        botones4.innerHTML = "Show more this product";
        botones4.style.color = "orange";
        botones4.style.cursor = "pointer";
    }
});
botones4.addEventListener("mouseout", function(){
    botones4.innerHTML = "$10.99";
    botones4.style.cursor = "pointer";
    botones4.style.color = "black";
});

botones5.addEventListener("mouseover", function(){
    if (botones5) {
        botones5.innerHTML = "Show more this product";
        botones5.style.color = "orange";
        botones5.style.cursor = "pointer";
    }
});
botones5.addEventListener("mouseout", function(){
    botones5.innerHTML = "$20.99";
    botones5.style.cursor = "pointer";
    botones5.style.color = "black";
});

botones6.addEventListener("mouseover", function(){
    if (botones6) {
        botones6.innerHTML = "Show more this product";
        botones6.style.color = "orange";
        botones6.style.cursor = "pointer";
    }
});
botones6.addEventListener("mouseout", function(){
    botones6.innerHTML = "$10.99";
    botones6.style.cursor = "pointer";
    botones6.style.color = "black";
});



heart.addEventListener("mouseover", function(){
    heart.style.fontSize = "20px";
});
heart.addEventListener("mouseout", function(){
    heart.style.fontSize = "25px";
});

heart2.addEventListener("mouseover", function(){
    heart2.style.fontSize = "20px";
});
heart2.addEventListener("mouseout", function(){
    heart2.style.fontSize = "25px";
});

heart3.addEventListener("mouseover", function(){
    heart3.style.fontSize = "20px";
});
heart3.addEventListener("mouseout", function(){
    heart3.style.fontSize = "25px";
});

heart4.addEventListener("mouseover", function(){
    heart4.style.fontSize = "20px";
});
heart4.addEventListener("mouseout", function(){
    heart4.style.fontSize = "25px";
});

heart5.addEventListener("mouseover", function(){
    heart5.style.fontSize = "20px";
});
heart5.addEventListener("mouseout", function(){
    heart5.style.fontSize = "25px";
});

heart6.addEventListener("mouseover", function(){
    heart6.style.fontSize = "20px";
});
heart6.addEventListener("mouseout", function(){
    heart6.style.fontSize = "25px";
});