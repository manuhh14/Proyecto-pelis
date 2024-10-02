import React, {useState} from 'react';
import { Listado } from './components/Listado';
import { Buscador } from './components/Buscador';
import { Crear } from './components/Crear';

const App= ()=>  {
  

  const [listadoState, setListadoState] = useState([])

    return (
      <div className="layout">
        {/* Cabecera */}
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>

          <h1>MisPelis</h1>
        </header>

        {/* Barra de navegación */}
        <nav className="nav">
          <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Peliculas</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Contacto</a></li>
          </ul>
        </nav>

        {/* Contenido principal */}
        <section id="content" className="content">

          {/* aquí van las películas */}
          <Listado  listadoState={listadoState} setListadoState={setListadoState} />

        </section>

        {/* Barra lateral */}
        <aside className="lateral">
          <Buscador />
          <Crear  setListadoState={setListadoState}/>
        </aside>

        {/* Pie de página */}
        <footer className="footer">
          &copy; Curso de React - <a href="https://manuelhernandez.com.edu">manuelhernandez.com.edu</a>
        </footer>

      </div>
    );
  
}

export default App;