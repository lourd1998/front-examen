import React from "react";

const Tabla = () => {
  const datos = [
    {
      especialidad: "Gastroenterologia",
      medico: "Dr. Aguilar Marcelo",
      nombre: "Ani",
      nacimiento: "16/09/83",
    },
    {
      especialidad: "Cardiologia",
      medico: "Dr. Eduardo Pino",
      nombre: "Fa",
      nacimiento: "20/10/83",
    },
  ];

  const boton = (medicoDato) => {
    console.log(medicoDato);
  };

  const Fila = () => {
    return datos.map((dato, index) => {
      return (
        <tr key={index}>
          <td>{dato.especialidad}</td>
          <td> {dato.medico}</td>
          <td>{dato.nombre}</td>
          <td>{dato.nacimiento}</td>
          <td>
            <button onClick={() => boton(dato.medico)}>Editar</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Especialidad</th>
            <th>Medico</th>
            <th>Nombre y Apellido del Paciente</th>
            <th>Fecha</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          <Fila />
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;
