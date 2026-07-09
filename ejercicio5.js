const prompt = require("prompt-sync")();

let stop = 1;
let opcion = 0;

function Vehiculo(modelo, marca, placa, color, kilometraje, encendido = false, velocidad = 0){
    this.modelo = modelo;
    this.marca = marca;
    this.placa = placa;
    this.color = color;
    this.kilometraje = kilometraje;
    this.kilometraje = kilometraje;
    this.velocidad = velocidad;

    this.avanzar = function(){
        if(this.encenderApagar) return this.velocidad += 1;
        return "Primero tienes que encender el vehiculo"
    }

    this.parar = function(){
        if(this.encenderApagar && this.velocidad > 0) return this.velocidad -= 1
        return "El carro esta apagado o no tiene velocidad"
    }

    this.encenderApagar = function(){
        if(this.encendido == false) return this.encendido = true
        return false
    }

    this.informacionVehiculo = function(){
        console.log("\n--- Datos del vehiculo ---");
        console.log("Marca: ", this.marca);
        console.log("Modelo: ", this.modelo);
        console.log("Placa: ", this.placa);
        console.log("Color: ", this.color);
        console.log("kilometraje: ", this.kilometraje, "\n");
        
    }
}

const carroUno = new Vehiculo("2019", "Toyota", "KLX209", "Blanco", 0);

do{
    console.log("\n--- MENU DE COCHE ---");
    console.log("1) Información del coche");
    console.log("2) Encender/apagar coche");
    console.log("3) Aumentar velocidad coche");
    console.log("4) Bajar/parar velocidad coche");
    console.log("5) Salor del menú\n");
    
    opcion = prompt("Selecciona una de las opciones: ");
    
    

    if(opcion == 1){
        console.log(carroUno.informacionVehiculo());

    }else if(opcion == 2){
        console.log(carroUno.encenderApagar());

    }else if(opcion == 3){
        console.log(carroUno.avanzar());

    }else if(opcion == 4){
        console.log(carroUno.parar());
    }else if(opcion == 5){
        stop = 0;
    }else{
        console.log("\nSelecciona otra opción que exista...\n");
    }
    

}while(stop != 0);