import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import Contactanos from './pages/Contactanos'
import AgregarArticulo from './pages/AgregarArticulo'
import ListaInventario from './pages/ListaInventario'
import MenuSuperior from './components/MenuSuperior'
import MenuInferior from './components/MenuInferior'
import './App.css'

function App() {
  return (
    <>
      <MenuSuperior />
      <main className="contenido">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/agregar" element={<AgregarArticulo />} />
          <Route path="/inventario" element={<ListaInventario />} />
          <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Routes>
      </main>
      <MenuInferior />
    </>
  )
}

export default App