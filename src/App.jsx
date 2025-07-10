import { useState } from 'react'

const initialConsoles = [
  "Dreamcast", "Game boy Color", "Playstaion 1", "PSP GO", "Xbox 360", "NEC Pc Engine", "Nintendo Ds"];


function App() {
  // variabile di stato che legge l'inserimento di una nuova console nell'input
  const [newConsole, setNewConsole] = useState("");

  // variabile di stato inizializzato a initialConsole per aggiungere una console nuova senza modificare l'array di partenza
  const [consoles, setConsoles] = useState(initialConsoles);


  // logica che attraverso lo spread operator applicata alla variabile di stato consoles spalma tutto il contenuto di initialConsoles per poi aggiungere il contenuto di newConsole e creare la nuova lista visualizzata a video
  const addConsole = (e) => {
    e.preventDefault()
    setConsoles([...consoles, newConsole])
    // reimposta a stringa vuota l'input
    setNewConsole("")
  }

  // logica per eliminare una console dalla lista, come parametro viene passato l'index per capire quale elemento nell'array
  const handleRemove = (index) => {
    // prendo tutto consoles e attraverso il metodo splice cancello 1 elemento all'index corrente
    const update = [...consoles];
    update.splice(index, 1)
    setConsoles(update)
  }

  return (
    <>
      <div className="container">
        <h1>Console List</h1>
        <ul className='list-group mb-3'>
          {consoles.map((console, index) => (
            <>
              <li key={index} className="list-group-item">
                {console}
                <button className='m-1' onClick={() => handleRemove(index)}>Elimina</button>
              </li>
            </>
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
