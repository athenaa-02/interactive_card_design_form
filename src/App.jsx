import './App.css'
import Home from './pages/HomePage/Home'
import { Route, Routes } from 'react-router'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
     </Routes>
    </>
  )
}

export default App
