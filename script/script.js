function calculoCombustivel() {
  let kmPorLitroAlcool = 0;
  let inputAlcool = document.querySelector("#vlr-alcool");
  let vlrAlcool = inputAlcool.value; // valor do alcool
  // O javascript não faz contas com a virgula essa instrução serve para substituir por um ponto
  vlrAlcool = parseFloat(vlrAlcool.replace(",", "."));

  let inputConsuAlcool = document.querySelector("#consu-alcool");
  let consuAlcool = inputConsuAlcool.value;
  consuAlcool = parseFloat(consuAlcool.replace(",", "."));

  kmPorLitroAlcool = vlrAlcool / consuAlcool; // resultado do consumo
  console.log(kmPorLitroAlcool);

  let kmPorLitroGasolina = 0;
  let inputGasolina = document.querySelector("#vlr-gasolina");
  let vlrGasolina = inputGasolina.value;
  vlrGasolina = parseFloat(vlrGasolina.replace(",", "."));

  let inputConsuGasolina = document.querySelector("#consu-gasolina");
  let consuGasolina = inputConsuGasolina.value;
  consuGasolina = parseFloat(consuGasolina.replace(",", "."));

  kmPorLitroGasolina = vlrGasolina / consuGasolina;
  console.log(kmPorLitroGasolina);

  let resultadoAlcool = document.querySelector(".result-alcool");
  let resultadoGasolina = document.querySelector(".result-gasolina");
  let noResult = document.querySelector(".no-result");
  let discontAlcool = document.querySelector("#discount-gas");
  let discontGas = document.querySelector("#discount-alcool");

  let porcentagemAlcoolMaisBarato =
    (kmPorLitroAlcool * 100) / kmPorLitroGasolina;
  porcentagemAlcoolMaisBarato = (porcentagemAlcoolMaisBarato - 100) * -1;

  let porcentagemGasolinaMaisBarato =
    (kmPorLitroGasolina * 100) / kmPorLitroAlcool;
  porcentagemGasolinaMaisBarato = (porcentagemGasolinaMaisBarato - 100) * -1;

  if (kmPorLitroAlcool < kmPorLitroGasolina) {
    resultadoAlcool.classList.add("from-right");
    resultadoGasolina.classList.remove("from-right");
    noResult.classList.add("opacity-off");
    discontAlcool.innerHTML = porcentagemAlcoolMaisBarato.toFixed(1);
  } else if (kmPorLitroAlcool > kmPorLitroGasolina) {
    resultadoGasolina.classList.add("from-right");
    resultadoAlcool.classList.remove("from-right");
    noResult.classList.add("opacity-off");
    discontGas.innerHTML = porcentagemGasolinaMaisBarato.toFixed(1);
  } else {
    resultadoAlcool.classList.remove("from-right");
    resultadoGasolina.classList.remove("from-right");
    noResult.classList.remove("opacity-off");
  }
}
