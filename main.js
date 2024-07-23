let button = document.getElementById('btn')

button.addEventListener('click', () => {
  const mlInput = document.getElementById('ml').value.trim();
  const horasInput = document.getElementById('horas').value.trim();
  const result = document.getElementById('output');
  let ml, horas;
  let ml_status = false, horas_status = false;
  
  if (mlInput === '' || isNaN(mlInput) || (parseInt(mlInput) <= 0)) {
    document.getElementById('ml_error').innerHTML = 'Por favor, coloque uma quantidade válida';
  } else {
    document.getElementById('ml_error').innerHTML = '';
    ml = parseInt(mlInput);
    ml_status = true;
  }
  
  if (horasInput === '' || isNaN(horasInput) || (parseInt(horasInput) <= 0)) {
    document.getElementById('horas_error').innerHTML = 'Por favor, coloque uma hora válida';
  } else {
    document.getElementById('horas_error').innerHTML = '';
    horas = parseInt(horasInput);
    horas_status = true;
  }
  
  if (ml_status && horas_status) {
    const gotejamento = (((ml / horas) * 20) / 60).toFixed(2);
    result.innerHTML = `Taxa de gotejamento: ${gotejamento} ml/min`;
  }
});
