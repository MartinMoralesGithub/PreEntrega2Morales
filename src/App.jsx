import './App.css'
import NavBar from './Componentes/NavBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ItemDetailContainer}  from './Componentes/ItemDetailContainer'
import {ItemListContainer}  from './Componentes/ItemListContainer'
import { CartProvider } from './context/Cartcontext'
import {Cart} from './Componentes/Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Checkout } from './Componentes/Checkout'

function App() {
  return (
    <>


<CartProvider>
<Router>
  <NavBar/>
  <Routes>
<Route path='/' element={<ItemListContainer/>} />
<Route path='/category/:categoryId' element={<ItemListContainer />} />
<Route path='/item/:productId' element={<ItemDetailContainer />} />
<Route path='/cart' element={<Cart/>} />
<Route path='/checkout' element={<Checkout/>}/>
<Route path='*' element={<h1>404 NOT FOUND</h1> } />
  </Routes>
  </Router>
</CartProvider>

<ToastContainer/>




  </>
  )
}

export default App