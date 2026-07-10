const prompt = require("prompt-sync")();
const menus = require("./menus")

//Variables auxiliares para el menú
let stop = 1;
let opcion = 0;
let LibroEscogido = "";


function Libro(ISBN, id_libro, autor, prestado = false, titulo, idioma, descripcion){
    this.id_libro = id_libro;
    this.autor = autor;
    this.prestado = prestado;
    this.titulo = titulo;
    this.ISBN = ISBN;
    this.idioma = idioma;
    this.descripcion = descripcion;

    this.prestar = function(){
        if(!prestado){
            console.log("Se puede prestar el libro");
        }else{
            console.log("No se puede prestar el libro");
        }
    }

    this.devolver = function(){
        if(prestado){
            console.log("Tienes que devolver el libro");   
        }else{
            console.log("El libro ya esta devuelvo");
        }
    }
}

const libro1 = new Libro(
    "1982540293826",
    "la_382",
    "Gabriel García Márquez",
    true,
    "100 años de soledad",
    "es",
    "Una novela clásica del realismo mágico que narra la historia de la familia Buendía en el pueblo ficticio de Macondo."
);

const libro2 = new Libro(
    "9780061120084",
    "la_101",
    "Harper Lee",
    true,
    "Matar un ruiseñor",
    "es",
    "Una historia sobre la justicia, el racismo y la empatía vista desde la perspectiva de una niña."
);

const libro3 = new Libro(
    "9780451524935",
    "la_102",
    "George Orwell",
    "1984",
    "es",
    "Una novela distópica que muestra una sociedad controlada por un régimen totalitario y la vigilancia constante."
);

const libro4 = new Libro(
    "9780307476463",
    "la_104",
    "Paulo Coelho",
    "El Alquimista",
    "es",
    "La aventura de un joven pastor que busca cumplir su leyenda personal y descubrir un gran tesoro."
);

const libros = [
    libro1, 
    libro2, 
    libro3,
    libro4
];

const ejercicioCuatro = () => {

    do{
        menus.menuLibro()
        opcion = parseInt(prompt("Selecciona una de las opciones: "));
    
        if(opcion == 1){
    
            for(let libro of libros){
                console.log(`
                Título: ${libro.titulo}
                Autor: ${libro.autor}
                Descripción: ${libro.descripcion}\n
                `);
            }
    
        }else if(opcion == 2){
            do{
                LibroEscogido = prompt("Escribe el libro que quieres prestar: ")
                if(LibroEscogido.length > 0){
                    console.log("\nNo escogiste ningun libro\n");
                }else{
                    LibroEscogido = prompt("¿Quieres escoger otro libro?: ")
                }
            }while(stop != 0);
            stop = 1;
    
        }else if(opcion == 3){
            //console.log(CarroUno.avanzar());
    
        }else if(opcion == 4){
            stop = 0;
        }else{
            console.log("\nSelecciona otra opción que exista...\n");
        }
        
    
    }while(stop != 0);
}

module.exports = {
    opcion4: ejercicioCuatro
}