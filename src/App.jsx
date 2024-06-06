import Home from "./components/Home"
import React from "react"
import { Route,Routes } from "react-router-dom"
import Details from "./components/Details"
import NavBar from "./components/NavBar"
import Add from "./components/Add"
import Edit from "./components/Edit"

function App() {

  return (
    
    <div className="w-screen h-screen flex">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/details/:id' element={<Details/>}/> 
        <Route path='/edit/:id' element={<Edit/>}/> 
        <Route path='/add' element={<Add/>}/> 
      </Routes>
    </div>
  )
}

export default App
