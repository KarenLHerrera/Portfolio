import React from "react";
import "../../css/Home/SobreMi.css";
const ModalSobreMi = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        <button className="cerrar" onClick={onClose}>
          ×
        </button>
        <h2>Datos que a nadie le importa</h2>
        <p>
          Cuando no estoy programando interfaces, estoy creando diseños visuales
          que mezclan estética y funcionalidad. 🎨💻
        </p>
        <p>
          También me apasiona el CrossFit: entrenar me da energía, foco y
          equilibrio para el día a día. 🏋️‍♀️🔥
        </p>
        <p>
          Soy profesora de danzas, donde la música y el
          movimiento me conectan con lo artístico desde otro lugar. 💃🎶
        </p>
      </div>
    </div>
  );
};

export default ModalSobreMi;
