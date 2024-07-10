import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/Pages/Home/Home'
import List from './assets/Pages/List/List'
import Login from './assets/Pages/Login/Login'
import New from './assets/Pages/New/New'
import Single from './assets/Pages/Single/Single'
import {productInputs, userInputs} from '../src/FormSourse'
import './Style/Dark.scss'
import { useContext } from 'react'
import { darkModeContext } from './Context/darkModeContext'
function App() {

  const {darkMode} = useContext(darkModeContext)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path='/' >
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='users'>
        <Route index element={<List/>}/>
        <Route path=':userId' element={<Single/>}/>
        <Route path='new' element={<New inputs = {userInputs} title="Add New User"/>}/>
        </Route>
        <Route path='products'>
        <Route index element={<List/>}/>
        <Route path=':productId' element={<Single/>}/>
        <Route path='new' element={<New inputs= {productInputs} title="Add New Product"/>}/>
        </Route>
        </Route>
      </Routes>
    </div>
  )
}
export default App
