/*3 - Crea una web con bootstrap y js, que contenga un botón input donde 
se pueda cargar una tarea y un botón que al ser presionado agregue dicha 
tarea a una lista, cada elemento ingresado en la lista debe poder ser 
eliminado con un botón creado para ese fin. 

*/


let listaTarea=[];
function cargaTarea(){
  inputTarea
  let tarea=document.getElementById("inputTarea").value;
  if(tarea==''){
    alert('ingresa un texto');
  }else{
    listaTarea.push(tarea);
    mostrarTarea();
    borrar("inputTarea");
  }
  
}
function mostrarTarea(){
  
  let mostraLista=document.getElementById('mostrarLista');
  mostraLista.innerHTML='';
  for (let i = 0; i < listaTarea.length; i++) {
    let cont=i;
    mostraLista.innerHTML +=`<li>${cont+1} - ${listaTarea[i]}</li>`;   
}
}
function eliminarTarea(){
  let tareaeliminar=document.getElementById("inputEliminar").value;
  if(tareaeliminar==''){
    alert('ingresa un numero de tarea a elimianar');
  }else{
    if(tareaeliminar <= listaTarea.length){
      
      tareaeliminar--;
     listaTarea.splice(tareaeliminar,1);
      mostrarTarea()
      borrar('inputEliminar')
    }
    else{
      alert('ERROR valor no encontrado... \ningrese un valor acorde ala tareas cargadas');
      borrar('inputEliminar')
    }
    
  }
}
function borrar(parametro){
  document.getElementById(parametro).value=''
}

