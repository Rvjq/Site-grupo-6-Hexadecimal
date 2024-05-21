function escolhido(element_name) {
    var res = '';
    const items = document.getElementsByName(element_name);
    for (var i = 0; i < items.length; i++) {
      if (items[i].checked) {
        res = items[i].value
        break;
      }
    }  
    return res;
}
  
function verificar() {
    const respostas = ["d", "c", "a", "b", "b", "a", "c", "a", "b","d"];
    let acertos = 0;
    let res
    for (let i = 1; i <= 10; i++) {
      res = escolhido(element_name='q' + i);
      if (res === '') {
        console.log('nenhum item foi selecionado');
      } else {
        console.log(i + ' O item selecionado foi ' + res);
        if (res === respostas[i-1]) {
          acertos++;
        }
      }
    }
    console.log('Total de acertos: ' + acertos);
    document.getElementById('resultado').innerHTML = acertos+"/10";
}