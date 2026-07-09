function Computador(marca, procesador, ram, disco, precio, modelo){
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.disco = disco;
    this.precio = precio;

    this.informacionComputador = function(){
        console.log(`\nEl computador ${marca} cuenta con un procesador ${procesador}, además incluye ${ram}gb de memoria ram, un disco ${disco}gb y el precio es de ${precio}\n`);
    }
}

const computadorUno = new Computador("Samsung", "i5", "8", "SSD 256", 1500000);
const computadorDos = new Computador("Lenovo", "i7", "12", "SSD 512", 2500000);
const computadorTres = new Computador("Dell", "i9", "16", "SSD 512", 2700000);

computadorUno.informacionComputador()
computadorDos.informacionComputador()
computadorTres.informacionComputador()