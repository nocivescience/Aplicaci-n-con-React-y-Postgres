import { useState } from "react";
import { Navbar } from "./componentes/Navbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TaskForm } from "./componentes/TaskForm";
import Fondo from "./estaticos/images/brown.jpg"

function App() {
  return (
    <div className="App">
      {/* <img src={Fondo} className='fondo-imagen'></img> */}
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<TaskForm></TaskForm>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
