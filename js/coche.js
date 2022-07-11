// Clase molde para haer coches
// implements -> Implementar la interface a la clase 
var Coche = /** @class */ (function () {
    // CONSTRUCTOR -> Metodo que se lanza al crear un objeto
    // Inicializa variables, las propiedades de la clase
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        // Valores de las propiedades por defecto
        this.color = "blanco";
        this.velocidad = 0;
        // Si el modelo es null/vacio
        if (modelo == null) {
            // por defecto sea BMW Generico
            this.modelo = "BMW Generico";
        }
        else {
            // Que obtenga el valor de modelo
            this.modelo = modelo;
        }
    }
    // GET-> Metodos que nos consiguen el valor de una propiedad
    Coche.prototype.getColor = function () {
        // Con this accedemos a las propiedades
        return this.color;
    };
    // SET-> Metodos para asignar un valor a la propiedad 
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    /* Si se comenta la clase getModelo(), dará error ya que la interface
    nos obliga a agregar el metodo*/
    // GET-> Metodos que nos consiguen el valor de una propiedad
    Coche.prototype.getModelo = function () {
        // Con this accedemos a las propiedades
        return this.modelo;
    };
    // SET-> Metodos para asignar un valor a la propiedad 
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    // Metodos para modificar propiedades de la clase
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
// Creamos Objetos para coche
var coche = new Coche("Renault Clio"); // Le asignamos un nombre al parametro modelo
var coche_dos = new Coche();
var coche_tres = new Coche();
// Seteamos los colores a la propiedad color
coche.setColor("ROJO");
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("El modelo del coche 1 es: " + coche.getModelo()); // SACA EL MODELO POR DEFECTO
console.log("El color del coche 1 es: " + coche.getColor());
console.log("La velocidad del coche 1 es: " + coche.getVelocidad());
coche.frenar();
console.log("La velocidad despues de frenar el coche 1 es: " + coche.getVelocidad());
/*
coche_dos.setColor("AZUL");
coche_tres.setColor("VERDE");


// Obtenemos los colores seteados con getColor
console.log("El color del coche 1 es: " + coche.getColor());
console.log("El color del coche 2 es: " + coche_dos.getColor());
console.log("El color del coche 3 es: " + coche_tres.getColor());
*/
