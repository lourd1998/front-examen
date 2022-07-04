import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Tabla from "./components/Tabla";
import Formulario from "./components/Formulario";

function App() {
  const [turnos, setTurnos] = useState([]);
  const [getTurno, setGetTurnos] = useState(true);
  const [seeTurno, setSeeTurnos] = useState(false);
  const [edit, setEdit] = useState(null);

  const saveTurno = (data) => {
    if (edit !== null) {
      const newTurnos = turnos;
      newTurnos[edit.index] = data;
      setTurnos(newTurnos);
      setGetTurnos(false);
      setSeeTurnos(true);
    } else {
      setTurnos([...turnos, data]);
      setGetTurnos(false);
      setSeeTurnos(true);
      setEdit(null);
    }
  };

  const especializacion = [
    { id: 0, type: "Elija especialidad" },
    { id: 1, type: "Gastroenterologia" },
    { id: 2, type: "Cardiologia" },
    { id: 3, type: "Dermatologia" },
    { id: 4, type: "Clinica Medica" },
    { id: 5, type: "Oftalmologia" },
    { id: 6, type: "Neumonologia" },
  ];

  const doctor = [
    { id: 0, type: "Elija medico" },
    { id: 1, type: "Aguilar Marcelo" },
    { id: 2, type: "Eduardo Pino" },
    { id: 3, type: "Claudia Zamora" },
    { id: 4, type: "Aquiles Vaesa" },
    { id: 5, type: "Graciela Gomez" },
    { id: 6, type: "Pedro Juarez" },
  ];

  const editTurno = (data, index) => {
    setEdit({ data, index });
    setGetTurnos(true);
    setSeeTurnos(false);
  };
  const deleteTurno = (data) => {
    setTurnos(
      turnos.filter((turno, index) => index !== data)
    );
  };

  return (
    <div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {
            setGetTurnos(true);
            setSeeTurnos(false);
          }}
        >
          Pedir Turno
        </button>
      </div>
      <div className="h-[100vh]">
        {getTurno ? (
          <Formulario
            isEdit={edit}
            saveAppointment={saveTurno}
            doctor={doctor}
            specialization={especializacion}
            appointments={turnos}
          />
        ) : null}

       

        {seeTurno ? (
          <Tabla
            turnos={turnos}
            editTurno={editTurno}
            deleteTurno={deleteTurno}
          />
        ) : null}
      </div>
    </div>
  );
}
export default App;
