/* Logra que las labels se desplacen en el formulario*/

var inputs = document.getElementsByClassName('formulario_input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener ('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
          this.nextElementSibling.classList.remove('fijar');
        } 
    });
}

/* Boton que muestra mas informacion*/

let boton1 = document.getElementById('boton1');
let caja_text1 = document.getElementById('caja_text1');
let caja_text2 = document.getElementById('caja_text2');
let caja_text3 = document.getElementById('caja_text3');

boton1.addEventListener('click', toggleText);
function toggleText() { 
  caja_text1.classList.toggle('show');
  caja_text2.classList.toggle('show');
  caja_text3.classList.toggle('show');
} 






