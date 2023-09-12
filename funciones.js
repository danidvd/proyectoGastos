
// Funcion para mostrar nuevo elemento cuando fecha de ingreso a la institucion es diferente a la fecha del accidente

function mostrarFechaIngreso(){
    const newElement = document.createElement("div");
    newElement.classList.add("div");
    newElement.innerHTML = `<div class="concept-left">
    <label>
    <span><strong>Fecha de ingreso</strong></span>
    <input id="ingresoInputAccidente2" disabled value="SI">
    <input type="text" class="cartaDiaIngreso" maxlength="2" name="" id="InputCartaDia2" list="diaAT" placeholder="Día">
    <input type="text" class="cartaMesIngreso" id="InputCartaMes2" maxlength="2" list="mesAT" placeholder="Mes">
    <input type="text" class="annioCartaIngreso" maxlength="4" id="InputCartaAnnio2" list="annioAT" placeholder="Año">
    </label>
    </div>`
    document.querySelector(".container").appendChild(newElement);
};


// Funcion para mostrar nuevo elemento cuando es por tope partido entre asegurador y EPS

function mostrarSegundoTope(){
    const newElement = document.createElement("div");
    newElement.classList.add("div");
    newElement.innerHTML = `<div class="concept-left">
    <label>
    <span><strong>ADRES</strong></span>
    <input id="InputTotalGasto2" disabled value="SI">
    <input type="text" class="totalGasto2" name="" maxlength="8" id="InputTotalGastoDos" placeholder="Total gasto">
    </label>
    </div>`
    document.querySelector(".container2").appendChild(newElement);
};

var tope2 = [{nombre:"SI",},];

var nombreTope2 = tope2.map(function(tope){
    return tope.nombre;
});

console.log(nombreTope2)

//var topeDosInput = document.getElementById("ingresoInputAccidente2");
//var topeDos = topeDosInput.value;

//var respuesta1 = "SI"
//var respuesta2 = 0;

//function mostrarRespuesta(respuesta){
    //if(respuesta===respuesta1){
    //return "Certifica que " + NameUser  + " identificado con " + tipoIdentificacion + " " + documentoPacienteCompleto + " ingresó a esta institución tras sufrir un accidente de tránsito, el día " + ingresoDia + " de "+ ingresoMesAccidente + " " +ingresoAnnio;
    //}
    //if(respuesta===respuesta2){
    //    "Certifica que " + NameUser  + " identificado con " + tipoIdentificacion + " " + documentoPacienteCompleto + " ingresó a esta institución tras sufrir un accidente de tránsito";
    //};
//}