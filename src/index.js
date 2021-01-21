import "./styles.css";

let datos = [
  {
    nombre: "Jose",
    edad: "25",
    genero: "M",
    mascotas: ["Perro", "Gato", "Ave"]
  },
  {
    nombre: "Angela",
    edad: "19",
    genero: "M",
    mascotas: ["Conejo", "Gato"]
  },
  {
    nombre: "Manuel",
    edad: "21",
    genero: "M",
    mascotas: ["Gato"]
  },
  {
    nombre: "Eduardo",
    edad: "31",
    genero: "M",
    mascotas: ["Gato", "Serpiente", "Cuyo"]
  },
  {
    nombre: "Perla",
    edad: "15",
    genero: "F",
    mascotas: ["Gato", "Pato"]
  }
];
///OJO todas las funciones de arr abajo usadas son sensibles a CAPS.
function nuevoArrConEdades(data) {
  let edades = [];
  data.forEach((cadaPersona) => {
    edades.push(cadaPersona.edad);
  });
  return edades;
}
function checkEdad(data) {
  return data < 18;
}
function lesGustanConejos(data) {
  let perConConejos = [];
  data.forEach((cadaPersona) => {
    if (cadaPersona.mascotas.includes("Conejo")) {
      perConConejos.push(cadaPersona.nombre);
    }
  });
  return perConConejos;
}

function arrConGeneros(data) {
  let generos = [];
  data.forEach((cadaPersona) => {
    generos.push(cadaPersona.genero);
  });
  return generos;
}
function checkMasculinos(data) {
  return data === "M";
}

document.getElementById("app").innerHTML = `
<h1>Ejercicios JS</h1>
<div id="ejercicio1">
1) Dado el arreglo de personas, genera un nuevo arreglo con las edades y valida si todas las personas son mayores a 18 años
</div>
<div>
- A)Arreglo con edades: <span id="respuestaA"></span>
</div>
<div>
- B)Son todos mayores a 18: <span id="respuestaB"></span>
</div>
</br>
<div>
2) Genera un nuevo arreglo con personas a quienes les gustan los conejos
</div>
<div>
- Personas a las que les gustan conejos: <span id="respuestaC"></span>
</div>
</br>
<div>
3) Valida si todos son hombres
</div>
<div>
- Son todos hombres: <span id="respuestaD"></span>
</div>

`;
document.getElementById("respuestaA").innerHTML = nuevoArrConEdades(datos);
document.getElementById("respuestaB").innerHTML = nuevoArrConEdades(datos).some(
  checkEdad
)
  ? "no"
  : "si";
document.getElementById("respuestaC").innerHTML = lesGustanConejos(datos);
document.getElementById("respuestaD").innerHTML = arrConGeneros(datos).every(
  checkMasculinos
)
  ? "si"
  : "no";
