//Fomulario.jsx
import React, { useState } from 'react';
import {BaseColaboradores} from "../BaseColaboradores";
import '../assets/main.css'

const Colaboradores = () => {
    const [nombreColaborador, setnombreColaborador] = useState("")
    const [emailColaborador, setemailColaborador] = useState("")
    const [nombreBuscar, setnombreBuscar] = useState("")
    const [listaColaborador, setListaColaborador] = useState(BaseColaboradores)

    //Función al enviar el formulario
    const enviarFormulario = (e) => {
        e.preventDefault()
        setListaColaborador([...listaColaborador, {id: Math.random(),nombre: nombreColaborador,correo:emailColaborador}])
    }
    //Función al escribir sobre el input del formulario
    const capturaInput = (e) => {
        setnombreColaborador(e.target.value)
    }
    const capturaNombre = (e)=>{
        setnombreBuscar(e.target.value)
    }
    const capturaEmail = (e) => {
        setemailColaborador(e.target.value)
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div>
                <a className="navbar-brand" href="#">Patricio Sudy</a>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={capturaNombre}/>
            </div>
        </nav>
        <h2>Ingresar colaborador</h2>
      <form onSubmit={enviarFormulario}>
        <label>Nombre</label>
        <input name="nombreColaborador" onChange={capturaInput} className="form-control"/> 
        <label>Correo electronico</label>
        <input name="emailColaborador" onChange={capturaEmail} className="form-control" /> 
        <button className="btn btn-secondary"> Ingresar </button>
      </form>
          
      <ul>
        {listaColaborador.filter(
                    (colaborador) => {
                        return colaborador.nombre.toLowerCase().includes(nombreBuscar.toLowerCase())
                    }
                ).map(colaborador =>
          <li
            key={colaborador.nombre}
            >
              {colaborador.nombre}
          </li>)}
      </ul>
    </div>
  );
};

export default Colaboradores;