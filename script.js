let display = document.getElementById("display")
function addValor(valor){
    display.value += valor;
}
function limpar(){
    display.value = ''
}
function invert() {
    try {
      display.value = parseFloat(display.value) * -1;
    } catch {
      display.value = '';
    }
  }
  function calcular() {
    let resultado = eval(document.getElementById("display").value);
    document.getElementById("display").value = resultado;
  }