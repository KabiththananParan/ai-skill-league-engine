import { useState } from 'react'
import Login from './pages/Login';
import SignUp from './pages/Signup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login></Login>
      <SignUp></SignUp>
    </>
  )
}

export default App
