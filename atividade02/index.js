const form = document.querySelector("#form")

const submitForm = (e) => {
    e.preventDefault();
    let [nota100, nota50, nota20, nota10] = [0,0,0,0];
    let valorSacado = document.querySelector('[data-input="caixa"]').value;
   
    console.log('nota100', nota100)
    while (valorSacado > 10) {
        console.log('valorSacado', valorSacado)
        if (valorSacado >= 100) {
            nota100 += Math.floor(valorSacado / 100)
            valorSacado = valorSacado % 100
        } else if (valorSacado >= 50) {
            nota50 += Math.floor(valorSacado / 50)
            valorSacado = valorSacado % 50
        } else if (valorSacado >= 20) {
            nota20 += Math.floor(valorSacado / 20)
            valorSacado = valorSacado % 20;
        } else {
            nota10 += Math.floor(valorSacado / 10)
            valorSacado = valorSacado % 10;
        }
    }
    console.log('valorSacadoPosWhile', valorSacado)
    if(valorSacado > 0 && valorSacado <= 10){
        nota10++;
    }
    console.log('nota100', nota100)
    console.log('nota50', nota50)
    console.log('nota20', nota20)
    console.log('nota10', nota10)
}
form.addEventListener('submit', submitForm)