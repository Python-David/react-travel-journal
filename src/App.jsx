import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./components/Header"
import Card from "./components/Card"
import Line from "./components/Line"
import data from "./data.js"

function App() {

  const cards = data.map(item => {
    return (
      <Card
      item = {item}
      />
    )
  })


  return (
    <div className="App">
      <Header />
      <Card />
      <Line />
    </div>
  )
}

export default App
