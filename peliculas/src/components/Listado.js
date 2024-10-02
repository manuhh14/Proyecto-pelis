import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

    //const [listadoState, setListadoState] = useState([])

    const [ editar, setEditar] =useState(0)

    useEffect(() => {
        console.log("Componente de listado de pelicula cargado...!!")
        conseguirPeliculas();
    }, [])

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"))
        setListadoState(peliculas)

        return peliculas
    }


    ///funcion para eliminar peliculas 

    const borrarPeli =(id)=>{
        
        //conseguir pelicuas
        let pelis_almacenadas = conseguirPeliculas()

        //Filtrar peliculas eliminadas
        let nuevo_array_peliculas= pelis_almacenadas.filter(peli => peli.id !== parseInt(id))

        //Actualizar el estado de listado
        setListadoState(nuevo_array_peliculas)

        //Actularizar los datos en el localStorage
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_peliculas))
        alert("pelicula eliminada"+ " " + id)
    }

    return (
        <div id="content" className="content">

            {listadoState != null ?
                listadoState.map(peli => {

                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripcion}</p>

                            <button className="edit" onClick={()=>{setEditar(peli.id)}}>Editar</button>
                            <button className="delete" onClick={()=> borrarPeli(peli.id)}>Borrar</button>



                            {/*mostrar formulario de editar */}
                            {editar === peli.id && (
                                <Editar 
                                    peli={peli}
                                    conseguirPeliculas= {conseguirPeliculas}
                                    setEditar={setEditar}
                                    setListadoState={setListadoState}
                                />
                            )}

                        </article>
                    )
                }) :
                <h2>No hay peliculas para mostrar</h2>
            }
        </div>
    )
}
