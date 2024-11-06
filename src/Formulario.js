import { useState } from "react";


function GenerateFormulario() {

  const [username, setUsername] = useState("");
  const  sendData = (e) => 
    {
      setUsername("Bienvenido " + e.target[0].value)
      e.preventDefault();
    }


  return (
    <div className="formularioContainer">
      <h5>{username}</h5>
      <form onSubmit={e => sendData(e)}>
        <label>
          Name:
          <input className="fields" type="text" name="name"/>
        </label>
        <button className="buttons" type="submit">Submit</button>
      </form>
    </div>
  );
}




export default GenerateFormulario;
