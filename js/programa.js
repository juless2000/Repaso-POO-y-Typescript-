var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modulo interno
// Se pueden definir tantas clases como quiera
// export -> se puede exportar la clase para su uso
var Tienda;
(function (Tienda) {
    var Ropa = /** @class */ (function () {
        function Ropa(titulo) {
            this.titulo = titulo;
            alert(titulo);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Informatica = /** @class */ (function () {
        function Informatica(titulo) {
            this.titulo = titulo;
            alert("Tienda de tecnologia: " + titulo);
        }
        return Informatica;
    }());
    Tienda.Informatica = Informatica;
})(Tienda || (Tienda = {}));
// Import -> Usar la clase que esta dentro de un modulo
var Informatica = Tienda.Informatica;
// Instanciamos la clase Informatica y le pasamos el parametro de titulo 
var cargar_informatica = new Informatica('Supertienda');
// DECORADOR
function arranque(lanzar) {
    return function (target) {
        // Añadiendo un nuevo metodo q se llama lanzamiento
        target.prototype.lanzamiento = function () {
            alert(lanzar);
        };
    };
}
// Clase Padre
// Aplicar decorador
var Programa = /** @class */ (function () {
    function Programa() {
    }
    // Metodos GET Y SET
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    Programa = __decorate([
        arranque('Lanzamiento del curso JS')
    ], Programa);
    return Programa;
}());
// Instanciar clase programa
var programa = new Programa();
// Iniciando el metodo agregado por el decorador
programa.lanzamiento();
// HERENCIAS
// extends -> Heredar de una clase
// Clase hijo
var EditorVideo = /** @class */ (function (_super) {
    __extends(EditorVideo, _super);
    function EditorVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorVideo.prototype.setTimeline = function (timeline) {
        this.timeline = timeline;
    };
    EditorVideo.prototype.getTimeline = function () {
        return this.timeline;
    };
    EditorVideo.prototype.getAllData = function () {
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeline();
    };
    return EditorVideo;
}(Programa));
// Instanciar la clase hijo
// EditorVideo tiene todos los metodos y prop. de la clase Programa
var editor = new EditorVideo();
editor.setNombre("Konami Studio");
editor.setVersion(1);
editor.setTimeline(4000);
// Obtenemos el resultado de todos los gets
console.log("Los datos del programa son: " + editor.getAllData());
// Logica del formulario
// Definimos el array de tipo string
var programas = [];
function guardar() {
    // <HTMLInputElement>> Indica al TS que es un elemento input de html
    // value -> recoger el valor q tiene el input
    // .toString -> convertir el valor a un string
    var nombre = document.getElementById("nombre").value.toString();
    // Crear el objeto de programa
    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(1);
    // Incrustamos los valores en el array
    programas.push(programa);
    // Recorremos el array programas mientras generamos un li
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    // Capturamos el elemento ul con id listado
    var listado = document.getElementById("listado");
    // Incrustamos con innerHTML el valor del recorrido del array
    listado.innerHTML = list;
    // Limpiar input al darle guardar
    document.getElementById("nombre").value = "";
}
