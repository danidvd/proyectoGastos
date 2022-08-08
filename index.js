
function onclickSumarNombre(){

    //Me muestra nombre de usuario
    var NameUserInput = document.getElementById("InputNameUser");
    var NameUser = NameUserInput.value;

    //Me muestra tipo de documento
    var tipoIdentificacionInput = document.getElementById("InputTiPaciente");
    var tipoIdentificacion = tipoIdentificacionInput.value;

    //Me muestra la cedula
    var documentoPacienteInput = document.getElementById("InputDocumento");
    var documentoPaciente = documentoPacienteInput.value;
    var documentoPacienteCompleto = formatoMexico(documentoPaciente);

    // fecha accidente
    var diaInput = document.getElementById("Inputdia");
    var dia = diaInput.value;

    var mesInput = document.getElementById("InputMes");
    var mes = mesInput.value;

    var annioInput = document.getElementById("InputAnnio");
    var annio = annioInput.value;

    var aseguradorInput = document.getElementById("InputAsegurador");
    var asegurador = aseguradorInput.value;

    // gasto

    var gastoInput = document.getElementById("InputTotalGasto");
    var gasto = gastoInput.value;
    var gastoTotal = formatoMexico(gasto);

    // nota u observacion

    var notaInput = document.getElementById("InputNota");
    var nota = notaInput.value;

    // fecha carta

    var cartaDiaInput = document.getElementById("InputCartaDia");
    var cartaDia = cartaDiaInput.value;

    var cartaMesInput = document.getElementById("InputCartaMes");
    var cartaMes = cartaMesInput.value;

    var cartaAnnioInput = document.getElementById("InputCartaAnnio");
    var CartaAnnio = cartaAnnioInput.value;

    //Funcionario

    var funcionarioInput = document.getElementById("InputFuncionario");
    var funcionaro = funcionarioInput.value;
    var nombreEmpleados = mostrarNombreUsuario(funcionaro);
    var nombreCargo = mostrarNombreCargo(funcionaro);
    var nombreCorreo = mostrarNombreCorreo(funcionaro);

    //Motivo

    var motivoCartaInput = document.getElementById("motivo-Input");
    var motivoCarta = motivoCartaInput.value;
    var queMotivoCarta = mostrarMotivo(motivoCarta);
    var CualMotivoCarta = mostrarMotivoFinal(motivoCarta);

    // Se Muestran los cambios en la carta Parrafo1
    var ResultadoNombre = document.getElementById("ResultadoNombre");
    ResultadoNombre.innerText = NameUser  + " identificado con " + tipoIdentificacion + " " + documentoPacienteCompleto + " ingresó a esta institución tras sufrir un accidente de tránsito.";

    var ResultadoAccidente = document.getElementById("ResultadoAccidente");
    ResultadoAccidente.innerText = "Desde el momento del ingreso a la institución el día " + dia + " de " + mes + " " + annio + " ha generado gastos médicos a cargo de: " + asegurador;

    var ResultadoGasto = document.getElementById("ResultadoGasto");
    ResultadoGasto.innerText = "$ " + gastoTotal;

    var ResultadoCarta = document.getElementById("ResultadoCarta");
    ResultadoCarta.innerText = "Esta constancia se realiza a solicitud del usuario y se firma en la ciudad de Medellín a los " + cartaDia + " días del mes de " + cartaMes + " de " + CartaAnnio;

    var ResultadoNota = document.getElementById("ResultadoNota");
    ResultadoNota.innerText = CualMotivoCarta;

    var ResultadoEmpleado = document.getElementById("ResultadoEmpleado");
    ResultadoEmpleado.innerText = nombreEmpleados;

    var ResultadoCargo = document.getElementById("ResultadoCargo");
    ResultadoCargo.innerText = nombreCargo;

    var ResultadoCorreo = document.getElementById("ResultadoCorreo");
    ResultadoCorreo.innerText = nombreCorreo;

    function mostrarMotivoFinal(motivo){
        var servicioInput = document.getElementById("inputServicio");
        var servicio = servicioInput.value;
        if(motivo === motivo1){
            return "NOTA: " + "Paciente solicita corte de cuenta para " + servicio + queMotivoCarta
        }
        if(motivo === motivo2){
            return "NOTA: " + "Paciente solicita corte de cuenta para " + servicio + queMotivoCarta
        }
        if(motivo === motivo3){
            return "NOTA: " + "Paciente solicita corte de cuenta para " + servicio + queMotivoCarta
        }
        if(motivo === motivo4){
            return "NOTA: " + queMotivoCarta
        }
        if(motivo === motivo5){
            return "NOTA: " + queMotivoCarta
        }
        if(motivo === motivo6){
            return "NOTA: " + queMotivoCarta
        }
        if(motivo === motivo7){
            return "NOTA: " + nota;
        }
    }
}

const formatoMexico = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    return number.toString().replace(exp,rep);
  }

  function imprimCartaGastos(){
    var printContents = document.getElementById('CartaGasto').innerHTML;
            w = window.open();
            w.document.write(printContents);
            w.document.close(); // necessary for IE >= 10
            w.focus(); // necessary for IE >= 10
        w.print();
        w.close();
            return true;}



