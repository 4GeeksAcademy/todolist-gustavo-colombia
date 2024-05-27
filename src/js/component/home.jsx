import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  function addTask(e) {
    if (e.key === "Enter") {
      setTasks([...tasks, task])
      setTask("")
    }
  }
  /*
  0-leer
  1-cocinar
  2-barrer 
  */

  function deleteTask(e, id) {
    e.preventDefault() // esta funcion (preventDefault) detiene el envio de informacion del formulario
    let aux = []
    aux = tasks.filter((item, index) => {
      if (index != id) {
        return item
      }
    })
    setTasks(aux)
  }

  return (
    <div className="container">
      <h1 className="text-center mt-5">Todos</h1>
      <div className="card">
        <div className="input-group">
          <input value={task} onChange={(e) => setTask(e.target.value)} onKeyDown={(e) => addTask(e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
        </div>

        <ul className="list-group list-group-flush">
          {tasks.map((item, id) => (
            <li key={id} className="list-group-item">
              {item}
              <button className="btn btn-outline-danger float-end" onClick={(e) => deleteTask(e, id)}><i className="fa fa-trash"></i></button>
            </li>
          ))}

        </ul>

      </div>
    </div>
  );
};

export default Home;
