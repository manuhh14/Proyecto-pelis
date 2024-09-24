import React, { Component } from 'react';

class App extends Component {
  render() {
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
          <article className="peli-item">
            <h3 className="title">Desarrollo web</h3>
            <p className="description">manuelhernandez.com.edu</p>

            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </article>

          <article className="peli-item">
            <h3 className="title">Desarrollo web</h3>
            <p className="description">manuelhernandez.com.edu</p>

            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </article>

          <article className="peli-item">
            <h3 className="title">Desarrollo web</h3>
            <p className="description">manuelhernandez.com.edu</p>

            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </article>

          <article className="peli-item">
            <h3 className="title">Desarrollo web</h3>
            <p className="description">manuelhernandez.com.edu</p>

            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </article>

        </section>

        {/* Barra lateral */}
        <aside className="lateral">
          <div className="search">
            <h3 className="title">Buscador</h3>
            <form>
              <input type="text" id="search_field" />
              <button id="search">Buscar</button>
            </form>
          </div>

          <div className="add">
            <h3 className="title">Añadir película</h3>
            <form>
              <input type="text" id="title" placeholder="Título" />
              <textarea id="description" placeholder="Descripción"></textarea>
              <input type="submit" id="save" value="Guardar" />
            </form>
          </div>
        </aside>

        {/* Pie de página */}
        <footer className="footer">
          &copy; Curso de React - <a href="https://manuelhernandez.com.edu">manuelhernandez.com.edu</a>
        </footer>

      </div>
    );
  }
}

export default App;