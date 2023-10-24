let calificaciones = [];

function subirNota(){
    let nota = +document.getElementById("inputNotas").value;
    if (nota !== "") {
        calificaciones.push(nota);
        document.getElementById("inputNotas").value = "";
    }
}

function mostrarNotas(){
    let listaNotas = document.getElementById("listaNotas");
    listaNotas.innerText = null;
    for (let calificacion of calificaciones) {
        let item = document.createElement("li");
        item.innerText = calificacion;
        listaNotas.appendChild(item);
    };
}

function mostrarPromedio(){
    let sumaCalificaciones = 0;
    let promedio = document.getElementById("promedio");
    for(let calificacion of calificaciones) {
        sumaCalificaciones +=calificacion;
        let promedioCalificaciones = sumaCalificaciones / calificaciones.length;
        promedio.textContent = promedioCalificaciones;
    }
}

function mostrarNotaAlta(){
    let notaAlta = document.getElementById("notaAlta");
    notaAlta.textContent = Math.max(...calificaciones);
}

function mostrarAplazos(){
    let aplazos = document.getElementById("aplazos");
    aplazos.textContent = "No";
    for (let calificacion of calificaciones){
        if (calificacion <= 3){
            aplazos.textContent = "Si";
            break;
        }
    }
}
