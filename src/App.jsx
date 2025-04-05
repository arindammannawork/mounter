import { useState } from 'react'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      {/* <div className='h-screen w-screen overflow-auto'>
      </div> */}
    </>
  )
}

export default App
