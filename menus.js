const Menu ={
    menuPrincipal: () => {

        console.log(`
            --- MENU DE EJERCICIOS ---
            1) Ejercicio computador
            2) Ejercicio mascota
            3) Ejercicio estudiante
            4) Ejercicio libro
            5) Ejercicio carro
            6) Salir`
        )
    },
    menuCarro: () => {
        console.log(`
            \n--- MENU DE COCHE ---
            1) Información del coche
            2) Encender/apagar coche
            3) Aumentar velocidad coche
            4) Bajar/parar velocidad coche
            5) Salir del menú\n
        `)
    },
    menuLibro: () => {

        console.log(`
            \n--- MENU DE LIBROS ---
    
            1) Mostrar libros disponibles
            2) Pedir prestado libro(s)
            3) Devolver libro(s)
            4) Salir
            
        `)
    }
}

module.exports = Menu