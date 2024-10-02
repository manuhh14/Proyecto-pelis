import React from 'react'

export const Editar = ({ peli, conseguirPeliculas, setEditar, setListadoState }) => {

    const titulo_componente = "Editar pelicula"

    const guardarEdicion = (e, id) => {
        e.preventDefault();

        //alert(id)
        //consegir el target del evento
        let target = e.target

        ///Buscar el indice del objeto de la pelicula a actualizar 
        const pelis_almacenadas = conseguirPeliculas()
        //console.log(pelis_almacenadas)
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id)
        //console.log(indice)

        //Crear un nuevo objeto con los nuevos datos
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        // console.log(indice, peli_actualizada)

        //Actualizar el elemento con ese indice
        pelis_almacenadas[indice] = peli_actualizada

        //Guardar el nuevo arreglo de objetos en el localstorage
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas))

        //Actualizar el estado del listado
        setListadoState(pelis_almacenadas)
        setEditar(0)

    }

    return (
        <div className='edit_form'>
            <h3 className='title'>{titulo_componente}</h3>

            <form onSubmit={e => guardarEdicion(e, peli.id)}>
                <input type="text"
                    name='titulo'
                    className='titulo_editado'
                    defaultValue={peli.titulo}
                />

                <textarea
                    name='descripcion'
                    defaultValue={peli.descripcion}
                    className='descripcion_editada'
                />

                <input type="submit"
                    className='editar'
                    value="Actualizar" />
            </form>
        </div>
    )
}
