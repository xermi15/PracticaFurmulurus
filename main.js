function crearFormulari() {
  var container = document.getElementsByTagName("div")[0];
	var formulari = document.createElement("form");
  var titolForm = document.createElement("h4");
  var textTitol = document.createTextNode("Formulari " + inputCrear.value);
  formulari.setAttribute("id", inputCrear.value);

  titolForm.appendChild(textTitol);
  formulari.appendChild(titolForm);
  formulari.appendChild(botoEliminar(formulari.id));
  container.appendChild(formulari);
}

function botoEliminar(idF) {
  var boto = document.createElement("button");
  boto.setAttribute("id", idF);
  boto.setAttribute("type", "button");
  boto.setAttribute("class", "btn btn-danger");
  var textBoto = document.createTextNode("Eliminar");

  boto.appendChild(textBoto);

  var botoE = boto;
  botoE.addEventListener("click", eliminarFormulari);
  return boto;
}

function eliminarFormulari(idF) {
  var form = idF.target;
  var borrar = form.parentNode;
  borrar.remove();
}












botoCrear = document.getElementById('botoCrear');
inputCrear = document.getElementById('inputCrear');

botoCrear.addEventListener('click', crearFormulari);
