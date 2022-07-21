import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <p> Todos los Derechos Reservados © {props.fecha}</p>
    </footer>
  );
};

export default Footer;
