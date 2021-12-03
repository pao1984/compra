import React from 'react'
import { Header } from "./componentes/Header/Header";
import { Productos } from './componentes/Productos/Productos'
import "./index.css"
import 'boxicons';


const App = () => {
  return (
    <div className = "App">
      <Header/>
<Productos/>

    </div>
  )
}

export default App
