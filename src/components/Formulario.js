import React from 'react';
import { useState } from 'react';

const Formulario = ({ saveAppointment, doctor, specialization, isEdit, appointments }) => {
  const [selectedSpec, setSelectedSpec] = useState(!isEdit ? '' : isEdit?.data.selectedSpec);
  const [selectedDoc, setSelectedDoc] = useState(!isEdit ? '' : isEdit?.data.selectedDoc);
  const [date, setDate] = useState(!isEdit ? '1996-05-01' : isEdit?.data.date);
  const [person, setPerson] = useState(!isEdit ?  { name: '', lastName: '' } : { name: isEdit.data.person.name, lastName: isEdit.data.person.lastName });

  const RenderSpecialization = ({ data }) => {
    return data.map((element) => (
      <option value={element.type} key={element.id}>
        {element.type}
      </option>
    ));
  };

  const handleDropdownSpec = (data) => {
    console.log(data); setSelectedSpec(data);
  }

  const handleDropdownDoc = (data) => setSelectedDoc(data);

  const handleDate = (date) => setDate(date);

  const handlePacient = (data) => setPerson({...person, ...data})

  const asd = () => {
    if (!selectedSpec || !selectedDoc )
      console.log('completar bien');
    else {
      if (person.name || person.lastName) {
        if (!appointments.find(appointment => appointment.date === date)) {
          saveAppointment({ selectedSpec, selectedDoc, date, person })
        } else {
          console.log('dia ocupado')
        }
      }
      else {
        console.log('falta nombre y/o apellido')
      }
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100%] border-solid border-gray-500 bg-pink-50">
        <div className="flex flex-col">
          <p className="m-3 text-[20px]">Formulario para un Turno Medico</p>
          <div className="m-3 ">
            <label id="specialization" name="specialization">
              Especialidad
            </label>
            <select
              name="specialization"
              id="specialization"
              className="w-[100%]"
              value={selectedSpec}
              placeholder="asd"
              onChange={(e) => handleDropdownSpec(e.target.value)}
            >
              <RenderSpecialization data={specialization} />
            </select>
          </div>
          <div className="m-3">
            <label id="specialization" name="specialization">
              Medico
            </label>
            <select
              name="doctor"
              id="doctor"
              className="w-[100%]"
              value={selectedDoc}
              onChange={(e) => handleDropdownDoc(e.target.value)}
            >
              <RenderSpecialization data={doctor} />
            </select>
          </div>
          <div className="m-3">
            <label id="date" name="date">
              Fecha del turno
            </label>
            <input
              type="date"
              name="date"
              className="w-[100%]"
              value={date}
              onChange={(event) => handleDate(event.target.value)}
            />
          </div>
          <div className="flex flex-col m-3">
            <label id="name" name="name">
              Nombre del paciente
            </label>
            <input
              type="text"
              name="name"
              value={person.name}
              onChange={(event) => handlePacient({name: event.target.value})}
            />
            <label id="last-name" name="last-name">
              Apellido del paciente
            </label>
            <input
              type="text"
              name="last-name"
              value={person.lastName}
              onChange={(event) => handlePacient({lastName: event.target.value})}
            />
          </div>
        </div>
        <button
          className="bg-violet-400 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => asd()}
        >
          {isEdit !== null ? 'Aceptar' : 'Agendar Turno'}
        </button>
      </div>
    </>
  );
};

export default Formulario;