export const guardarEnStorage = (clave, elemento) => {

    //conseguir los datos que ya tenemos en el locastarage
    let elementos = JSON.parse(localStorage.getItem(clave))
    console.log(elementos)
    
    //comprobar si es un arreglo
    if(Array.isArray(elementos)){
     // si es un arreglo agregamos el elemento
     elementos.push(elemento)
    }else{
        //creamos un nuevo arreglo con la nueva pelicula
        elementos=[elemento]
    }

    //guardar pelicula en el almacenamiento local
    localStorage.setItem('pelis', JSON.stringify(elementos))

    //devolver un objeto
    return elemento;
}