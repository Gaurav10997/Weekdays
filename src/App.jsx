import { useState } from 'react'
import './App.css'
import JobCard from './components/jobCard/JobCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <JobCard/>
    </>
  )
}

export default App
