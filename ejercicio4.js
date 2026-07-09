function Libro(id_libro, autor, prestado = false, nombreLibro){
    this.id_libro = id_libro;
    this.autor = autor;
    this.prestado = prestado;
    this.nombreLibro = nombreLibro;

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


const libro1 = new Libro("2734234", "Gabriel García Marquez", true, "100 años de soledad");
const libro2 = new Libro("2734234", "Gabriel García Marquez", true, "100 años de soledad");

libro1.prestar()
libro1.devolver()

libro2.prestado();