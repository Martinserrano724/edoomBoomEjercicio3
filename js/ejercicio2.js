/*3 - Crea una web con bootstrap y js, que contenga un botón input donde 
se pueda cargar una tarea y un botón que al ser presionado agregue dicha 
tarea a una lista, cada elemento ingresado en la lista debe poder ser 
eliminado con un botón creado para ese fin. 

*/

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      return alert(`Es mayor de edad`);
    } else {
      return alert(`Es Menor de edad`);
    }
  }

  mostrarDatos() {
    alert(
      `\n nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.dni}\n Sexo: ${this.sexo}\nPeso: ${this.peso}\nAltura: ${this.altura}\naño : ${this.anioNacimiento}`
    );
  }
  mostrarGeneracion() {
    let resultado = 2023 - this.edad;
    alert(`La generacion es: `);

    if (resultado <= 2010 && resultado >= 1994) {
      alert(`generacion Z`);
    } else if (resultado <= 1993 && resultado >= 1981) {
      alert(`generacion Y`);
    } else if (resultado <= 1980 && resultado >= 1969) {
      alert(`generacion X`);
    } else if (resultado <= 1968 && resultado >= 1949) {
      alert(`Baby Boom`);
    } else if (resultado <= 1948 && resultado >= 1930) {
      alert(`silent generacion(niños pos guerra)`);
    }
  }
}

let testPersona;
function iniciarCarga() {
  const formulario = document.forms.usuarioForm;
  //se recupera el valor del formulario de forma de objeto usando el id

  let nombreIngresado = formulario.elements.formNombre.value;
  let edadIngresada = formulario.elements.formEdad.value;
  let dniIngresada = formulario.elements.formDni.value;
  let sexoIngresada = formulario.elements.sexo.value;
  let pesoIngresada = formulario.elements.formPeso.value;
  let alturaIngresada = formulario.elements.formAltura.value;
  let anioNacimientoIngresada = formulario.elements.formAnio.value;

  testPersona = new Persona(
    nombreIngresado,
    edadIngresada,
    dniIngresada,
    sexoIngresada,
    pesoIngresada,
    alturaIngresada,
    anioNacimientoIngresada
  );

  btnGeneracion.disabled = false;
  btnGeneracion.className=`btn btn-outline-primary`;
  btnMostrar.disabled = false; 
  btnMostrar.className=`btn btn-outline-primary`
  btnMayor.disabled = false; 
  btnMayor.className=`btn btn-outline-primary`;
  alert("Datos Enviados Correctamente");

}

function datosMostrar() {
  testPersona.mostrarDatos();
  document.getElementById("datosMos").value = testPersona;
}

/*
const btnMostrar = document.getElementById('provarPersona');
btnMostrar.className = `btn btn-secondary`;
btnMostrar.innerHTML = '<b>Mostrar Datos Ingresados En un Alert</b>';
btnMostrar.disabled = true; 
*/

