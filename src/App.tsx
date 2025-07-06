import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/electron-vite.animate.svg'
import './App.css'
import Login from './component/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Login/>
       </div>
    </>
  )
}

export default App
