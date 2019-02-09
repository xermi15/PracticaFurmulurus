function crearFormulari() {
  var container = document.getElementsByTagName("div")[0];
	var formulari = document.createElement("form");
  var titolForm = document.createElement("h4");
  var textTitol = document.createTextNode("Formulari " + inputCrear.value);

  titolForm.appendChild(textTitol);
  formulari.appendChild(titolForm);
  container.appendChild(formulari);
}













botoCrear = document.getElementById('botoCrear');
inputCrear = document.getElementById('inputCrear');

botoCrear.addEventListener('click', crearFormulari);
