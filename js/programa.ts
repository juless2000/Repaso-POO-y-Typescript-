// Modulo interno
// Se pueden definir tantas clases como quiera
// export -> se puede exportar la clase para su uso
module Tienda{
	export class Ropa{
		constructor(public titulo: string){
			alert(titulo);
		}
	}

	 export class Informatica{
		constructor(public titulo: string){
			alert("Tienda de tecnologia: " + titulo);
		}
	}
}

// Import -> Usar la clase que esta dentro de un modulo
import Informatica = Tienda.Informatica;
// Instanciamos la clase Informatica y le pasamos el parametro de titulo 
let cargar_informatica = new Informatica('Supertienda') 

// DECORADOR
function arranque(lanzar: string){
	return function(target: Function){
		// Añadiendo un nuevo metodo q se llama lanzamiento
		target.prototype.lanzamiento = function(): void{
			alert(lanzar);
		}
	}
}


// Clase Padre
// Aplicar decorador
@arranque('Lanzamiento del curso JS')
class Programa{

	// Propiedades de la clase
	public nombre: string;
	public version: number;

	// Metodos GET Y SET
	getNombre(){
		return this.nombre;
	}

	getVersion(){
		return this.version;
	}

	setNombre(nombre:string){
		this.nombre = nombre;
	}

	setVersion(version:number){
		this.version = version;
	}
	
}

// Instanciar clase programa
var programa = new Programa();
// Iniciando el metodo agregado por el decorador
programa.lanzamiento();

// HERENCIAS
// extends -> Heredar de una clase
// Clase hijo
class EditorVideo extends Programa{
	public timeline: number;

	setTimeline(timeline:number){
		this.timeline = timeline;
	}

	getTimeline(){
		return this.timeline;
	}

	getAllData():string{
		return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeline();
	}
}

// Instanciar la clase hijo
// EditorVideo tiene todos los metodos y prop. de la clase Programa
var editor = new EditorVideo();
editor.setNombre("Konami Studio")
editor.setVersion(1);
editor.setTimeline(4000);

// Obtenemos el resultado de todos los gets
console.log("Los datos del programa son: " + editor.getAllData());


// Logica del formulario

// Definimos el array de tipo string
var programas = []; 

function guardar(){
	// <HTMLInputElement>> Indica al TS que es un elemento input de html
	// value -> recoger el valor q tiene el input
	// .toString -> convertir el valor a un string
	var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

	// Crear el objeto de programa
	var programa = new Programa();
	programa.setNombre(nombre);
	programa.setVersion(1);
	// Incrustamos los valores en el array
	programas.push(programa);

	// Recorremos el array programas mientras generamos un li
	var list = "";
	for(var i = 0; i<programas.length; i++){
		list = list+"<li>"+programas[i].getNombre()+"</li>"
	}

	// Capturamos el elemento ul con id listado
	var listado = <HTMLElement>document.getElementById("listado");
	// Incrustamos con innerHTML el valor del recorrido del array
	listado.innerHTML = list;

	// Limpiar input al darle guardar
	(<HTMLInputElement>document.getElementById("nombre")).value = "";
}