import { useState } from 'react'

const initialConsoles = [
  "Dreamcast", "Game boy Color", "Playstaion 1", "PSP GO", "Xbox 360", "Playstation 5 Pro", "Nintendo 64", "NEC Pc Engine", "Nintendo Ds"];


function App() {
  const [newConsole, setNewConsole] = useState("");

  return (
    <>
      <div className="container">
        <h1>Console List</h1>
        <ul className='list-group mb-3'>
          {initialConsoles.map((initialConsole, index) => (
            <li key={index} className="list-group-item">
              {initialConsole}
            </li>
          ))}
        </ul>
      </div>
      <form>
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
