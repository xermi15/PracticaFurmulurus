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




function crearBoto(textBoto) {
  var boto = document.createElement("button");

  boto.setAttribute("id", "boto");
  boto.setAttribute("type", "button");
  boto.setAttribute("class", "btn btn-primary");
  boto.appendChild(textBoto);

  return boto;
}

function crearInput(textInput) {
  var input = document.createElement("input");
  var inputLabel = document.createElement("label");
  var formGroup = document.createElement("div");

  input.setAttribute("id", "input");
  input.setAttribute("type", "input");
  input.setAttribute("class", "form-control");

  inputLabel.setAttribute("for", "input");
  inputLabel.appendChild(textInput);

  formGroup.setAttribute("class", "form-group");
  formGroup.appendChild(inputLabel);
  formGroup.appendChild(input);

  return formGroup;
}

function crearEmail() {
  var email = document.createElement("email");
  var emailLabel = document.createElement("label");
  var formGroup = document.createElement("div");

  email.setAttribute("id", "input");
  email.setAttribute("type", "input");
  email.setAttribute("class", "form-control");

  inputLabel.setAttribute("for", "input");
  inputLabel.appendChild(document.createTextNode("Email"));

  formGroup.setAttribute("class", "form-group");
  formGroup.appendChild(inputLabel);
  formGroup.appendChild(input);

  return formGroup;
}







botoCrear = document.getElementById('botoCrear');
inputCrear = document.getElementById('inputCrear');

botoCrear.addEventListener('click', crearFormulari);
