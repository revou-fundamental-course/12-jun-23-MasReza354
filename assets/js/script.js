$('form').submit(function (event) {
  event.preventDefault();
  convertInputDegree()
});

function convertInputDegree() {

  let inputDegree = parseInt($('#inputDegree').val());
  let selectInputDegreeType = $('#selectInputDegreeType').val();
  let conversionType = $('#selectConversionType').val();

  let resultValue = "";

  switch (selectInputDegreeType) {

    case "C":
      resultValue = cTo(inputDegree, conversionType);
      break;

    case "F":
      resultValue = fTo(inputDegree, conversionType);
      break;

    case "K":
      resultValue = kTo(inputDegree, conversionType);
      break;

  }
  // Pembaruan Secara Langsung
  $('#inputDegree').on('input', () => convertInputDegree());
  $('#selectInputDegreeType').change(() => convertInputDegree());
  $('#selectConversionType').change(() => convertInputDegree());

  // UNTUK MENCEGAH  NaN atau ERROR //
  if (isNaN(inputDegree)) {
    $('#convertedDegree').text('');
    return;
  }

  // UNTUK MEMPERBARUI DERAJAT
  $('#convertedUnit').text(conversionType)

  // UNTUK MEMPERBARUI NILAI DERAJAT
  if (conversionType === selectInputDegreeType) {

    $('#convertedDegree').text(inputDegree);
  } else {

    return $('#convertedDegree').text(resultValue.toFixed(2));

  }

}

// KONVERSI FAHRENHEIT
function fTo(inputDegreeValue, conversionDegreeType) {

  let temperature = '';

  switch (conversionDegreeType) {
    case 'F':
      temperature = inputDegreeValue;
      break;
    case 'C':
      temperature = eval((inputDegreeValue - 32) * (5 / 9));
      break;
    case 'K':

      temperature = eval((inputDegreeValue + 459.67) * (5 / 9));
      break;

  }
  return temperature;
}
//KONVERSI FAHRENHEIT SELESAI //

// KONVERSI CELSIUS //

function cTo(inputDegreeValue, conversionDegreeType) {

  let temperature = '';

  switch (conversionDegreeType) {

    case 'C':
      temperature = inputDegreeValue;
      break;
    case 'F':
      temperature = eval((inputDegreeValue * (9 / 5)) + 32);
      break;
    case 'K':
      temperature = eval(inputDegreeValue + 273.15);
      break;

  }

  return temperature;
}
// KONVERSI CELSIUS SELESAI //

// KONVERSI KELVIN //

function kTo(inputDegreeValue, conversionDegreeType) {

  let temperature = '';

  switch (conversionDegreeType) {
    case 'K':
      temperature = inputDegreeValue;
      break;
    case 'F':
      temperature = eval((inputDegreeValue - 273.15) * (9 / 5) + 32);
      break;
    case 'C':
      temperature = eval((inputDegreeValue - 273.15));
      break;

  }
  return temperature;
}
// KONVERSI KELVIN SELESAI //