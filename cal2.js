

function add(value) {
  document.getElementById("pantalla2").value+=value;
}

function limpiar() {
  document.getElementById("pantalla2").value='';

}

function Calcular() {
  try {
       const result = eval(document.getElementById("pantalla2").value);
       document.getElementById("pantalla2").value = result;
  
  }catch(error){
       document.getElementById("pantalla2").value = "wrong of dates";
  
  }

}