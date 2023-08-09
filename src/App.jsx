import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>FLEX BOX</h1>
      <div className="card">
        <h3>REALIZADO POR</h3>
        <h4>ARMANDO ROMERO SUA</h4>
        <h4>Fase 5</h4>

        <h6> Enlace para ir al Proyecto</h6>
        <a href="inicio.html">Click para ir al Proyecto</a>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
