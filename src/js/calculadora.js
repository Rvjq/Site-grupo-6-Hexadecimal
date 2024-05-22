function conversor(de, para, input) {
  if (de == para) {
    return input
  } else {
    input = parseInt(input, parseInt(de));
    return input.toString(parseInt(para));
  }
}

function converter() {
  let select_input = document.getElementById('select-input').value;
  let select_output = document.getElementById('select-output').value;
  let input = document.getElementById('input').value;
  console.log(select_input, select_output, input);
  let output = conversor(select_input, select_output, input)
  document.getElementById('output').value = output;
}