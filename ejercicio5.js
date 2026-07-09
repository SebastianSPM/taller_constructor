const prompt = require("prompt-sync")();

//Variables auxiliares para el menú
let stop = 1;
let opcion = 0;

function Vehiculo(modelo, marca, placa, color, kilometraje, encendido = false, velocidad = 0){
    this.modelo = modelo;
    this.marca = marca;
    this.placa = placa;
    this.color = color;
    this.kilometraje = kilometraje;
    this.encendido = encendido;
    this.velocidad = velocidad;

    this.avanzar = function(){
        if(this.encendido) return `Aumentando: ${this.velocidad += 1}+`;
        return "Primero tienes que encender el vehiculo"
    }

    this.parar = function(){
        if(this.encendido && this.velocidad > 0) return `Bajando: ${this.velocidad -=1}-`
        return "El carro esta apagado o no tiene velocidad"
    }

    this.encenderApagar = function(){
        if(this.encendido) return this.encendido = false;
        return this.encendido = true;
    }

    this.informacionVehiculo = function(){
        return `
            \n--- Datos del vehiculo ---\n
    Marca:  ${this.marca}
    Modelo: ${this.modelo}
    Placa:  ${this.placa}
    Color:  ${this.color}
    kilometraje: ${this.kilometraje}
        `
    }
}

const CarroUno = new Vehiculo("2019", "Toyota", "KLX209", "Blanco", 0);

do{
    console.log("\n--- MENU DE COCHE ---");
    console.log("1) Información del coche");
    console.log("2) Encender/apagar coche");
    console.log("3) Aumentar velocidad coche");
    console.log("4) Bajar/parar velocidad coche");
    console.log("5) Salor del menú\n");
    
    opcion = prompt("Selecciona una de las opciones: ");

    if(opcion == 1){
        console.log(CarroUno.informacionVehiculo());

    }else if(opcion == 2){
        console.log(CarroUno.encenderApagar() ? "Auto encendido" : "Auto apagado");

    }else if(opcion == 3){
        console.log(CarroUno.avanzar());

    }else if(opcion == 4){
        console.log(CarroUno.parar());

    }else if(opcion == 5){
        stop = 0;
    }else{
        console.log("\nSelecciona otra opción que exista...\n");
    }
    

}while(stop != 0);