function crearFormulari() {

  /*creació formulari*/
  var container = document.getElementsByTagName("div")[0];
  var cardBody = document.createElement("div");
	var formulari = document.createElement("form");
  var titolForm = document.createElement("h4");
  var textTitol = document.createTextNode("Formulari " + inputCrear.value);

  formulari.setAttribute("id", inputCrear.value);
  formulari.setAttribute("class", "formulariCreat");

  cardBody.setAttribute("class", "card card-body formulariCreat")
  /*Estructura del formulari*/
  titolForm.appendChild(textTitol);
  formulari.appendChild(titolForm);

  //================Pruebas==============//
  formulari.appendChild(crearInputText("Input text:"));
  // formulari.appendChild(crearInputData("Input date:"));
  // formulari.appendChild(crearInputNumero("Input numero:"));
  // formulari.appendChild(crearTextArea("Textarea:"));
  // formulari.appendChild(crearInputFile("FileInput:"));
  // formulari.appendChild(crearEmail());
  // formulari.appendChild(crearPassword());
  // formulari.appendChild(crearCheck("Check"));
  // formulari.appendChild(crearRadio());
  // formulari.appendChild(crearDropdown("Drop"));
  // formulari.appendChild(crearSeleccionMultiple("SelMul"));
  // formulari.appendChild(crearBoto("boto1"));
  formulari.appendChild(crearBotoSubmit());
  //==================FIN================//

  formulari.appendChild(botoEliminarForm(formulari.id));
  cardBody.appendChild(formulari);
  container.appendChild(cardBody);

  var icona = document.createElement('i');
  icona.setAttribute('class', 'far fa-trash-alt');
  container.appendChild(icona);

  document.getElementById("botoEditar").style.visibility = "visible";
}

function eliminarFormulari(idF) {
  var form = idF.target;
  var borrar = form.parentNode.parentNode;
  borrar.remove();
}

function editarFormularis() {
  document.getElementById("eliminarCamp").style.visibility = "visible";
}


//Boton e input crear formulario
botoCrear = document.getElementById('botoCrear');
inputCrear = document.getElementById('inputCrear');
botoEditar = document.getElementById('botoEditar');
botoEditar.addEventListener('click', editarFormularis);

//Guardar
guardarM1 = document.getElementById('guardarModal1');
guardarM2 = document.getElementById('guardarModal2');
guardarM3 = document.getElementById('guardarModal3');
guardarM4 = document.getElementById('guardarModal4');
guardarM1.addEventListener('click', guardarModal1);
guardarM2.addEventListener('click', guardarModal2);
guardarM3.addEventListener('click', guardarModal3);
guardarM4.addEventListener('click', guardarModal4);



//#########################################################//
//-------------------------Modales-------------------------//
//#########################################################//

//Obre el modal que et demana el label del camp
function obrirModal1() {
  $('#modal1').modal('show');
}

//Guarda el contingut del camp label i tanca el modal
function guardarModal1() {
  modal1InputLabel = document.getElementById('modal1InputLabel').value;
  console.log(modal1InputLabel);
  $('#modal1').modal('hide');
  crearFormulari();
}

//Obre el modal que et demana el label del camp
function obrirModal2() {
  $('#modal2').modal('show');
}

//Guarda el contingut del camp label i tanca el modal
function guardarModal2() {
  modal2InputLabel = document.getElementById('modal2InputLabel').value;
  opcionsTextAreaModal2 = $('#opcionsTextAreaModal2').val().split(/\n/);
  console.log(modal2InputLabel);
  console.log(opcionsTextAreaModal2);
  $('#modal2').modal('hide');
  crearFormulari();
}
function obrirModal3() {
  $('#modal3').modal('show');
}

//Guarda el contingut del camp label i tanca el modal
function guardarModal3() {
  modal3InputLabel = document.getElementById('modal3InputLabel').value;
  modal3InputMinim = document.getElementById('modal3InputLabelMinim').value;
  modal3InputMax = document.getElementById('modal3InputLabelMax').value;
  console.log(modal3InputLabel);
  console.log(modal3InputMinim);
  console.log(modal3InputMax);
  $('#modal3').modal('hide');
  crearFormulari();
}
function obrirModal4() {
  $('#modal4').modal('show');
}

//Guarda el contingut del camp label i tanca el modal
function guardarModal4() {
  modal4InputLabel = document.getElementById('modal4InputLabel').value;
  modal4NumMini = document.getElementById('modal4InputLabelMinim').value;
  modal4NumMaxi = document.getElementById('modal4InputLabelMax').value;
  //console.log(modal4InputLabel);
  //console.log(modal4NumMini);
  //console.log(modal4NumMaxi);
  $('#modal4').modal('hide');
  crearInputNumero(modal4InputLabel,modal4NumMini,modal4NumMaxi);
}

//TO-DO: els que necessiten rang i opcions han d'apareixer abans del titol

//#########################################################//
//-------------------------Botones-------------------------//
//#########################################################//

function botoEliminarForm(idF) {
  var boto = document.createElement("button");
  var textBoto = document.createTextNode("Eliminar");

  boto.setAttribute("id", idF);
  boto.setAttribute("type", "button");
  boto.setAttribute("class", "btn btn-danger");
  boto.appendChild(textBoto);

  var botoE = boto;
  botoE.addEventListener("click", eliminarFormulari);

  return boto;
}

function crearBoto(textBoto) {
  var boto = document.createElement("button");

  boto.setAttribute("id", "boto");
  boto.setAttribute("type", "button");
  boto.setAttribute("class", "btn btn-primary");
  boto.appendChild(document.createTextNode(textBoto));

  return boto;
}

function crearBotoSubmit() {
  var boto = document.createElement("button");

  boto.setAttribute("id", "boto");
  boto.setAttribute("type", "submit");
  boto.setAttribute("class", "btn btn-primary");
  boto.appendChild(document.createTextNode("Submit"));

  return boto;
}

// function checkEliminarCamp() {
//   var formCheck = document.createElement("div");
//   var inputCheck = document.createElement("input");
//   var labelCheck = document.createElement("label");
//   var X = document.createTextNode("X");
//
//   formCheck.setAttribute("class", "form-check mb-2 mr-sm-2 eliminarCamp");
//   formCheck.setAttribute("style", "visibility: hidden;");
//
//   inputCheck.setAttribute("class", "form-check-input");
//   inputCheck.setAttribute("type", "checkbox");
//   inputCheck.setAttribute("id", "inlineFormCheck");
//
//   labelCheck.setAttribute("for", "inlineFormCheck");
//   labelCheck.setAttribute("class", "form-check-input");
//
//   labelCheck.appendChild(X);
//   formCheck.appendChild(inputCheck);
//   formCheck.appendChild(labelCheck);
//
//   return formCheck;
// }
function checkEliminarCamp() {
  var formCheck = document.createElement("div");
  var aCheck = document.createElement("a");
  var iCheck = document.createElement("i");

  formCheck.setAttribute("class", "form-check mb-2 mr-sm-2 eliminarCamp");
  //formCheck.setAttribute("style", "visibility: hidden;");

  iCheck.setAttribute("class", "far fa-trash-alt");

  aCheck.setAttribute("href", "#");

  aCheck.appendChild(iCheck);
  formCheck.appendChild(aCheck);


  return formCheck;
}


//#########################################################//
//-------------------------Inputs-------------------------//
//#########################################################//

inEmail = document.getElementById('collapseEmail');
inPass = document.getElementById('collapsePass');
inText = document.getElementById('collapseText');
inNum = document.getElementById('collapseNum');
inFile = document.getElementById('collapseFile');
inTextA = document.getElementById('collapseTextA');

inEmail.addEventListener("click", obrirModal1);
inPass.addEventListener("click", obrirModal1);
inText.addEventListener("click", obrirModal3);
//inNum.addEventListener("click", obrirModal4);
inFile.addEventListener("click", obrirModal1);
inTextA.addEventListener("click", obrirModal1);

//TO-DO: que cada vez sea un id diferente
function crearInputText(textInput) {
  var input = document.createElement("input");
  var inputLabel = document.createElement("label");
  var formInline = document.createElement("form");

  //Creamos el campo input
  input.setAttribute("id", "input");
  input.setAttribute("type", "text");
  input.setAttribute("class", "form-control mb-2 mr-sm-2 col-11");

  //Creamos el label del campo input
  inputLabel.setAttribute("for", "input");
  inputLabel.setAttribute("class", "sr-only");
  inputLabel.appendChild(document.createTextNode(textInput));

  //Lo anadimos todo al formgroup
  formInline.setAttribute("class", "form-inline");
  //formInline.appendChild(inputLabel);
  formInline.appendChild(input);
  formInline.appendChild(checkEliminarCamp());

  return formInline;
}

//TO-DO: que cada vez sea un id diferente
function crearInputNumero(label,minim,maxim) {
  var input = document.createElement("input");
  var inputLabel = document.createElement("label");
  var formGroup = document.createElement("div");

  //Creamos el campo input
  input.setAttribute("id", "input");
  input.setAttribute("type", "input");
  input.setAttribute("class", "form-control");
  input.setAttribute("pattern", "^[0-9]*$");
  input.setAttribute("title", "^[0-9]*$");


  //Creamos el label del campo input
  inputLabel.setAttribute("for", "input");
  inputLabel.appendChild(document.createTextNode(textInput));

  //Lo anadimos todo al formgroup
  formGroup.setAttribute("class", "form-group");
  formGroup.appendChild(inputLabel);
  formGroup.appendChild(input);

  return formGroup;
}

//TO-DO: que cada vez sea un id diferente
function crearInputData(textInput) {
  var input = document.createElement("input");
  var inputLabel = document.createElement("label");
  var formGroup = document.createElement("div");

  //Creamos el campo input
  input.setAttribute("id", "input");
  input.setAttribute("type", "date");
  input.setAttribute("class", "form-control");

  //Creamos el label del campo input
  inputLabel.setAttribute("for", "input");
  inputLabel.appendChild(document.createTextNode(textInput));

  //Lo anadimos todo al formgroup
  formGroup.setAttribute("class", "form-group");
  formGroup.appendChild(inputLabel);
  formGroup.appendChild(input);

  return formGroup;
}

//TO-DO: que cada vez sea un id diferente
//TO-DO: altura variable (rows)
function crearTextArea(textInput) {
  var ta = document.createElement("textarea");
  var taLabel = document.createElement("label");
  var formGroup = document.createElement("div");

  //Creamos el campo input
  ta.setAttribute("id", "textarea");
  ta.setAttribute("rows", "3");
  ta.setAttribute("class", "form-control");

  //Creamos el label del campo input
  taLabel.setAttribute("for", "textarea");
  taLabel.appendChild(document.createTextNode(textInput));

  //Lo anadimos todo al formgroup
  formGroup.setAttribute("class", "form-group");
  formGroup.appendChild(taLabel);
  formGroup.appendChild(ta);

  return formGroup;
}

//TO-DO: que cada vez sea un id diferente
function crearInputFile(textInput) {
  var fi = document.createElement("input");
  var fiLabel = document.createElement("label");
  var formGroup = document.createElement("div");

  //Creamos el campo input
  fi.setAttribute("id", "fileInput");
  fi.setAttribute("type", "file");
  fi.setAttribute("class", "form-control-file");

  //Creamos el label del campo input
  fiLabel.setAttribute("for", "fileInput");
  fiLabel.appendChild(document.createTextNode(textInput));

  //Lo anadimos todo al formgroup
  formGroup.setAttribute("class", "form-group");
  formGroup.appendChild(fiLabel);
  formGroup.appendChild(fi);

  return formGroup;
}

//TO-DO: que cada vez sea un id diferente
//TO-DO: el campo a rellenar esta bloqueado
function crearEmail() {
  var email = document.createElement("email");
  var emailLabel = document.createElement("label");
  var formGroup = document.createElement("div");

  //Creamos el campo email
  email.setAttribute("id", "email");
  email.setAttribute("type", "email");
  email.setAttribute("class", "form-control");

  //Creamos el label
  emailLabel.setAttribute("for", "email");
  emailLabel.appendChild(document.createTextNode("Email"));

  //Lo anadimos todo al formgroup
  formGroup.setAttribute("class", "form-group");
  formGroup.appendChild(emailLabel);
  formGroup.appendChild(email);

  return formGroup;
}

//TO-DO: que cada vez sea un id diferente
//TO-DO: el campo a rellenar esta bloqueado
function crearPassword() {
  var password = document.createElement("password");
  var passwordLabel = document.createElement("label");
  var formGroup = document.createElement("div");

  //Creamos el campo email
  password.setAttribute("id", "password");
  password.setAttribute("type", "password");
  password.setAttribute("class", "form-control");

  //Creamos el label
  passwordLabel.setAttribute("for", "password");
  passwordLabel.appendChild(document.createTextNode("Password"));

  //Lo anadimos todo al formgroup
  formGroup.setAttribute("class", "form-group");
  formGroup.appendChild(passwordLabel);
  formGroup.appendChild(password);

  return formGroup;
}



//#########################################################//
//-------------------------Radio---------------------------//
//#########################################################//

collapseRadio = document.getElementById('collapseRadio');
collapseCheckbox = document.getElementById('collapseCheckbox');

collapseRadio.addEventListener('click', obrirModal2);
collapseCheckbox.addEventListener('click', obrirModal2);

//TO-DO: Error en la visualizacion
//TO-DO: que cada vez sea un id diferente
function crearCheck(textCheck) {
  var check = document.createElement("input");
  var checkLabel = document.createElement("label");
  var formGroup = document.createElement("div");

  //Creamos el campo check
  check.setAttribute("id", "checkbox");
  check.setAttribute("type", "checkbox");
  check.setAttribute("class", "custom-control-input");

  //Creamos el label
  checkLabel.setAttribute("for", "check");
  checkLabel.setAttribute("class", "custom-control-label");
  checkLabel.appendChild(document.createTextNode(textCheck));

  //Lo anadimos todo al formgroup
  formGroup.setAttribute("class", "custom-control");
  formGroup.setAttribute("class", "custom-checkbox");
  formGroup.appendChild(checkLabel);
  formGroup.appendChild(check);

  return formGroup;
}

//TO-DO: Error en la visualizacion
//TO-DO: que cada vez sea un id diferente
//TO-DO: que cada linia pueda ser diferente
//TO-DO: que podamos crear tantas lineas como guste
function crearRadio() {
  var formGroup = document.createElement("div");

  formGroup.setAttribute("class", "custom-control");
  formGroup.setAttribute("class", "custom-radio");

  for (var i = 1; i < 4; i++) {
    var formRadio = document.createElement('div');
    var radio = document.createElement("input");
    var radioLabel = document.createElement("label");

    //Creamos el campo radio
    radio.setAttribute("id", "radio");
    radio.setAttribute("type", "radio");
    radio.setAttribute("class", "custom-control-input");
    //radio.setAttribute("value", i);

    //Creamos el label
    radioLabel.setAttribute("for", "radio");
    radioLabel.setAttribute("class", "custom-control-label");
    radioLabel.appendChild(document.createTextNode(i));

    //Lo anadimos todo al formgroup
    formRadio.appendChild(radioLabel);
    formRadio.appendChild(radio);
    formGroup.appendChild(formRadio);
  }

  return formGroup;
}



//#########################################################//
//--------------Dropdown i seleccion multiple--------------//
//#########################################################//

collapseDropdown = document.getElementById('collapseDropdown');
collapseMultiple = document.getElementById('collapseMultiple');

collapseDropdown.addEventListener('click', obrirModal2);
collapseMultiple.addEventListener('click', obrirModal2);

//TO-DO: que cada vez sea un id diferente
//TO-DO: crear cantidad variable de opciones
//TO-DO: texto personalizado para las opciones
function crearDropdown(textDropdown) {
  var dd = document.createElement("select");
  var ddLabel = document.createElement("label");
  var formGroup = document.createElement("div");

  //Creamos el campo input
  dd.setAttribute("id", "dropdown");
  dd.setAttribute("type", "select");
  dd.setAttribute("class", "form-control");

  for (var i = 1; i < 6; i++) {
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode(i));
    //opt.setAttribute("value", i);
    dd.appendChild(opt);
  }

  //Creamos el label del campo input
  ddLabel.setAttribute("for", "dropdown");
  ddLabel.appendChild(document.createTextNode(textDropdown));

  //Lo anadimos todo al formgroup
  formGroup.setAttribute("class", "form-group");
  formGroup.appendChild(ddLabel);
  formGroup.appendChild(dd);

  return formGroup;
}

//TO-DO: texto personalizado para las opciones
function crearSeleccionMultiple(textSelMul) {
  var sm = document.createElement("select");
  var smLabel = document.createElement("label");
  var formGroup = document.createElement("div");

  //Creamos el campo input
  sm.setAttribute("id", "seleccionMultiple");
  sm.setAttribute("type", "select");
  sm.setAttribute("class", "form-control");
  sm.multiple = true;

  for (var i = 1; i < 6; i++) {
    var opt = document.createElement("option");
    opt.appendChild(document.createTextNode(i));
    //opt.setAttribute("value", i);
    sm.appendChild(opt);
  }

  //Creamos el label del campo input
  smLabel.setAttribute("for", "seleccionMultiple");
  smLabel.appendChild(document.createTextNode(textSelMul));

  //Lo anadimos todo al formgroup
  formGroup.setAttribute("class", "form-group");
  formGroup.appendChild(smLabel);
  formGroup.appendChild(sm);

  return formGroup;
}



//#########################################################//
//---------------------Funcionamiento----------------------//
//#########################################################//

//1. Desplegamos el panel de textControl

//2.Seleccionamos los campos que queremos anadir al formulario
//    1. Seleccionamos Input
//        a. Se nos abre un desplegable con los tipos disponibles
//        b. Seleccionamos el que queramos
//            I. En el caso de numeros nos pide si queremos anadir un rango
//            II. En el caso de string, la longitud
//        c. En el caso de tener rango o longitud true, salta un popup o alert para rellenarlo
//        d. Una vez rellenado, o en caso de no tener, nos pide rellenar el nombre del input mediante popup o alert
//        e. Al aceptar, el campo se añade al formulario <- y esto como coño lo hacemos
//    2. Seleccionamos Radio/Checkbox/Multiple/Dropdown
//        a. Se nos abre un desplegable con los tipos disponibles (radio, checkbox, multiple, dropdown)
//        b. Seleccionamos el que queramos
//        c. Nos pide el numero de opciones de las que queremos disponer con popup o alert
//        c. Para cada opcion, nos pide el nombre (valor tambien?)
//        d. Una vez rellenado, nos pide rellenar el nombre del input mediante popup o alert
//        e. Al aceptar, el campo se añade al formulario <- y esto como coño lo hacemos

//3. Hacemos submit para crear el formulario con los campos seleccionados

//4. Borrar elementos de un formulario / editar formularios
//     1. Hacemos click en el boton editar formulario -> esta cambia de texto a Finalizar Edicion
//     2. Aparecen las cruces que permiten borrar un elemento (ocultas hasta entonces)
//     3. Seguiran apareciendo hasta que pulsemos otra vez el boton finalizar edicion -> esta cambia de texto a Editar
