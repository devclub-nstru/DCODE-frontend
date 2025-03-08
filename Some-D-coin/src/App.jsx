import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact-us/Contact'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <hr />
    <Hero />
    <hr />
    <Footer />
    <hr />
    <Contact />
    </>
  )
}

export default App
