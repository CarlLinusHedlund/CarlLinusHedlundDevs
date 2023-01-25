import { useState } from 'react'
import './index.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='text-red-500'>Hello, i'm Carl!</h1>
    </div>
  )
}

export default App
