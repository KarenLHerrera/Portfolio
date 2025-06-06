import React, { useState } from 'react';
import me from '../../assets/me.jpg';
import '../../css/Home/Home.css';
import SobreMi from './SobreMi'; 
import useStore from '../../store/useStore';

const MainHome = () => {

  const [mostrarModal, setMostrarModal] = useState(false);
    const darkMode = useStore((state) => state.darkMode);
  return (
    <>
      <div className="contenedor">
        <div className={`texto ${darkMode ? "texto dark" : "texto light"}`}>
          <h2>Hola!</h2>
          <h1 className={`Karen ${darkMode ? "Karen dark" : "Karen light"}`}>Soy Karen Herrera</h1>
          <h3>Estudiante de Programación</h3>
          <p>
            Actualmente curso la Tecnicatura Universitaria en Programación en la Universidad Tecnológica Nacional - Facultad Regional Tucumán
          </p>
          <p>Me apasiona la programación, el diseño web y resolver problemas con creatividad. 💻✨</p>
        <p>Además me gusta aprender cosas nuevas, trabajar en equipo y seguir creciendo como desarrolladora.</p>
          <button className="BotonSobreMi" onClick={() => setMostrarModal(true)}>Más Sobre mí</button>
        </div>

        <div className="imagen">
          <img src={me} alt="Karen Herrera" />
        </div>
      </div>

      <SobreMi visible={mostrarModal} onClose={() => setMostrarModal(false)} />
    </>
  );
};

export default MainHome;