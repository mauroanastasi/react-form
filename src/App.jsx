import { useState } from 'react'

const initialConsoles = [
  "Dreamcast", "Game boy Color", "Playstaion 1", "PSP GO", "Xbox 360", "Playstation 5 Pro", "Nintendo 64", "NEC Pc Engine", "Nintendo Ds"];


function App() {
  const [newConsole, setNewConsole] = useState("");
  const [consoles, setConsoles] = useState(initialConsoles);



  const addConsole = (e) => {
    e.preventDefault()
    setConsoles([...consoles, newConsole])
    setNewConsole("")

  }

  return (
    <>
      <div className="container">
        <h1>Console List</h1>
        <ul className='list-group mb-3'>
          {consoles.map((console, index) => (
            <li key={index} className="list-group-item">
              {console}
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={addConsole}>
        <div className="input-group mb-3">
          <input
            value={newConsole}
            onChange={(e) => {
              setNewConsole(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Nuova Console"
          />
          <button className='btn btn-primary'>Add Console</button>
        </div>
      </form>
    </>
  )
}

export default App
