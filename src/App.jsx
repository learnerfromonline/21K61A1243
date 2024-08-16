import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [Content,setContent] = useState([])
  
  async function fetchApi(){
    const Apires = await fetch()
  }
  useEffect(()=>{
    fetchApi()
  },[])

  return (
    <h1>Hai</h1>
  )
}

export default App
