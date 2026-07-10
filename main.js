const prompt = require("prompt-sync")();
const menus = require("./menus");
const ejercicioUno = require("./ejercicio1");
const ejercicioDos = require("./ejercicio2");
const ejercicioTres = require("./ejercicio3");
const ejercicioCuatro = require("./ejercicio4");
const ejercicioCinco = require("./ejercicio5");


let seleccion = 0;
let stop = 1;

const Main = () => {
    do{
        menus.menuPrincipal()
        seleccion = parseInt(prompt("Selecciona una opción: "))

        switch (seleccion) {
            case 1:
                ejercicioUno.opcion1()
                break;
    
            case 2:
                ejercicioDos.opcion2()
                break
    
            case 3:
                ejercicioTres.opcion3()
                break
    
            case 4:
                ejercicioCuatro.opcion4()
                break
    
            case 5:
                ejercicioCinco.opcion5()
                break
            case 6:
                stop = 0;
                break
                
            default:
                console.log("\nNo existe esa opción, ingresa de nuevo otra opción existente(1-5)...\n");
                break;
        }
    }while(stop != 0);
}

Main()