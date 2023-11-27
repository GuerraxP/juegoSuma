let pregunta = document.querySelector(".pregunta");
let operador1 = document.querySelector("#op1");
let operador2 = document.querySelector("#op2");
let operador3 = document.querySelector("#op3");
const btn = document.querySelectorAll(".boton_resp");
const btn1 = document.querySelector("#boton_resp1");
const btn2 = document.querySelector("#boton_resp2");
const btn3 = document.querySelector("#boton_resp3");
let resultadotext = document.querySelector(".resultado");
const btntext1 = document.querySelector("#btn1Rsptext");
const btntext2 = document.querySelector("#btn2Rsptext");
const btntext3 = document.querySelector("#btn3Rsptext");

for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", () => {
        let resultado = parseInt(operador1.textContent) + parseInt(operador2.textContent);
        (btn[i].value == resultado) ? evaluar(true,resultado) : evaluar(false,resultado);
    });
}

function evaluar(a,res) {
    if (a) {
        resultadotext.textContent = "CORRECTO"
        resultadotext.style = "display:block"
        resultadotext.style = "color:green"
        operador3.textContent = res;
        setTimeout(OprAleat,2000)
    } else {
        resultadotext.textContent = "INTENTA NUEVAMENTE"
        resultadotext.style = "display:block"
        resultadotext.style = "color:red"
    }
}

function OprAleat() {
    let num1 = Math.floor(Math.random() * 11)
    let num2 = Math.floor(Math.random() * 11)
    let resultado = operador1 + operador2;

    operador1.textContent = num1;
    operador2.textContent = num2;
    operador3.textContent = "?"
    //console.log(typeof resultado)
    cambiarBtns(resultado)
}

function cambiarBtns(resul) {
    let numAleatorio = Math.floor(Math.random() * 3)
    //console.log(typeof resul)
    //resul = parseInt(resul);

    if (numAleatorio === 0) {
        //console.log(typeof resul)
        btntext1.innerHTML = resul;
        btntext2.innerHTML = (resul + 1);
        btntext3.innerHTML = (resul - 1);
    }
    if (numAleatorio === 1) {
        //console.log(typeof resul)
        btntext1.innerHTML = (resul + 1);
        btntext2.innerHTML = (resul);
        btntext3.innerHTML = (resul - 1);
    }
    if (numAleatorio === 2) {
        //console.log(typeof resul)
        btntext1.innerHTML = (resul + 1);
        btntext2.innerHTML = (resul - 1);
        btntext3.innerHTML = resul;
    }
}
