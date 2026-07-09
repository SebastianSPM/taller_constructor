function Estudiante(nombre, id_estudiante, curso, nota){
    this.nombre = nombre;
    this.id_estudiante = id_estudiante;
    this.curso = curso;
    this.nota = nota;

    this.calculada = function(){
        return this.nota >= 3.0
    }

    this.mostrarResultado = function(){
        console.log(`\nAlumno: ${nombre} con id ${id_estudiante} del curso ${curso} `, this.calculada() ? "APROBO" : "REPROBO", "\n");
    }
}

const estudianteUno = new Estudiante("Sebastian", "3284398", "Programación Web", 3.9);
const estudianteDos = new Estudiante("Enrique", "8474626", "Física", 2.9);
const estudianteTres = new Estudiante("Fernanda", "637426", "Informática", 4.6);
const estudianteCuatro = new Estudiante("Luisa", "092654", "Español", 2.0);


estudianteUno.mostrarResultado();
estudianteDos.mostrarResultado();
estudianteTres.mostrarResultado();
estudianteCuatro.mostrarResultado();