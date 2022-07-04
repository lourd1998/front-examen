import React from "react";

const Tabla = () => {
  const datos = [
    {
      date: "1996-05-01",
      person: { name: "ana", lastName: "sciangula" },
      selectedDoc: "Eduardo Pino",
      selectedSpec: "Gastroenterologia",
    },
    {
      date: "2000-08-10",
      person: { name: "lur", lastName: "murua" },
      selectedDoc: "Claudua Gomez",
      selectedSpec: "Dermatologia",
    },
  ];
  const editTurno =() => console.log("Editar")
  const handleDeleteTurno=()=>console.log("Eliminar")
  const RenderData = () => {
    return datos?.map((turno, index) => {
      return (
        <tr key={index} className="border-solid border-[2px] border-black">
          <td>{turno.selectedDoc}</td>
          <td>{turno.selectedSpec}</td>
          <td>{turno.date}</td>
          <td>{`${turno.person.name} ${turno.person.lastName}`}</td>
          <td>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => editTurno(turno, index)}
            >
              Editar
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => handleDeleteTurno(index)}
            >
              Eliminar
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-[30vh] border-solid border-gray-500 bg-red-200 m-5">
      <table className="table-fixed leading-[21px] h-[350px] lg:text-[1.125rem] w-[100%]">
        <thead>
          <tr className="border-solid border-[2px] border-black">
            <th className="text-left lg:pl-[16px] lg:pt-[10px] lg:pb-[29px]">
              Medico
            </th>
            <th className="text-left lg:pl-[16px] lg:pt-[10px] lg:pb-[29px]">
              Especialidad
            </th>
            <th className="text-left lg:pl-[16px] lg:pt-[10px] lg:pb-[29px]">
              Fecha
            </th>
            <th className="text-left lg:pl-[16px] lg:pt-[10px] lg:pb-[29px]">
              Paciente
            </th>
          </tr>
        </thead>
        <tbody>
          <RenderData />
        </tbody>
      </table>
    </div>
  );
};
export default Tabla;
