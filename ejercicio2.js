function Mascota(nombre, especie, edad, peso){
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    this.presentarse = function(){
        console.log(`\nHola, me llamo ${nombre}, soy de especie ${especie}, tengo ${edad} año y peso ${peso} kg\n`);
    }
}

const perroUno = new Mascota("Marte", "French Poodle", 2, 8);
const perroDos = new Mascota("Destructor", "Chihuahua", 4, 3);
const perroTres = new Mascota("Zeús", "Pastor Alemán", 7, 30);


perroUno.presentarse();
perroDos.presentarse();
perroTres.presentarse();