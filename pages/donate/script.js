function capturar() {
    var resultado = "ninguno";

    var porNombre = document.getElementsByName("optradio");

    for (var i = 0; i < porNombre.length; i++) {
        if (porNombre[i].checked)
            resultado = porNombre[i].value;
    }

    document.getElementById("another-amount").value = " \
    Por Nombre: "+ resultado;
}

document.addEventListener('DOMContentLoaded', function(){


let inputs = document.querySelectorAll('input[type="radio"]');

// console.log(inputs[0]);

for(let i = 0; i < inputs.length; i++)

inputs[i].addEventListener('change', function(){

if(this.checked){

   document.getElementById("another-amount").value = this.value;
}
})
})