import './App.css'
import NavBar from './Componentes/NavBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ItemDetailContainer}  from './Componentes/ItemDetailContainer'
import {ItemListContainer}  from './Componentes/ItemListContainer'



function App() {

  return (
    <>

<Router>
  <NavBar/>
  <Routes>
<Route path='/' element={<ItemListContainer/>} />
<Route path='/category/:categoryId' element={<ItemListContainer />} />
<Route path='/item/:productId' element={<ItemDetailContainer />} />
  </Routes>
  </Router>


  </>
  )
}

export default App