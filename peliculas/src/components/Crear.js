import React, { useState } from 'react'
import { guardarEnStorage } from '../helpers/GuadarEnStorage';

export const Crear = ({setListadoState}) => {
    const tituloComponente = "Añadir Pelicula";

    const [pelisState, setPelisState] = useState({
        titulo: '',
        descripcion: ''
    });

    const { titulo, descripcion } = pelisState;

    const conseguirDatosFormulario = (e) => {
        e.preventDefault();
        let target = e.target;

        ///conseguir los datos del formulario
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //crear el objeto a guardar 
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }
        setPelisState(peli);
        
        ///actualizar el estado listado
        setListadoState(elemento =>{
            return [...elemento, peli]
        })
        

        console.log(pelisState);


        //guardar en el almacenamiento local
        guardarEnStorage("pelis", peli)

        //limpiar el formulario
        target.reset();
        /// alert(titulo+" "+descripcion)
    }



    return (
        <div>
            <div className="add">
                <h3 className="title">{tituloComponente}</h3>

                <form onSubmit={conseguirDatosFormulario}>
                    <input
                        type="text"
                        id="titulo"
                        name='titulo'
                        placeholder="Título" />

                    <textarea
                        id="descripcion"
                        name='descripcion'
                        placeholder="Descripción">
                    </textarea>

                    <input
                        type="submit"
                        id="save"
                        value="Guardar" />

                </form>
            </div>
        </div>
    )
}
