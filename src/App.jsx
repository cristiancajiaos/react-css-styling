import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  const myStyle = {
    color: 'blue',
    backgroundColor: 'red',
    border: '1px solid black',
    borderRadius: '10px'
  };

  return (
    <>
      <section className="container my-2">
        {/* Estilo mediante atributo style, sea directo o mediante un objeto*/}
        <h1 style={{color: "red", backgroundColor: "blue"}}>Title styled directly via style attribute</h1>
        <p style={myStyle}>I'm a paragraph styled through an object</p>

        <hr/>

        <section className="layout">
          <h1>Layout styled through a CSS file</h1>
          <p>This section is styled through the <code>App.css</code> file</p>
        </section>

        <hr/>

        {/* No se pudo usar CSS Modules */}  
        <section>
          <h1>Section styled through a CSS module</h1>
        </section>


      </section>
    </>
  )
}

export default App
