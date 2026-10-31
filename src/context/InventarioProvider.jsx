import { useEffect, useState } from 'react'
import { InventarioContext } from './InventarioContext'

const CLAVE_GUARDADO = 'inventario-articulos'

const articulosIniciales = [
  { id: 1, nombre: 'Arroz grado 1 (1 kg)', marca: 'Tucapel', tipo: 'Abarrotes', cantidad: 120 },
  { id: 2, nombre: 'Leche entera (1 L)', marca: 'Colún', tipo: 'Lácteos', cantidad: 200 },
  { id: 3, nombre: 'Yogur natural (pack 4)', marca: 'Soprole', tipo: 'Lácteos', cantidad: 12 },
  { id: 4, nombre: 'Bebida cola (2 L)', marca: 'Coca-Cola', tipo: 'Bebidas', cantidad: 0 },
  { id: 5, nombre: 'Detergente líquido (3 L)', marca: 'Omo', tipo: 'Limpieza', cantidad: 22 },
  { id: 6, nombre: 'Pan de molde blanco', marca: 'Ideal', tipo: 'Panadería', cantidad: 45 },
]

function cargarArticulos() {
  try {
    const guardados = localStorage.getItem(CLAVE_GUARDADO)
    return guardados ? JSON.parse(guardados) : articulosIniciales
  } catch {
    return articulosIniciales
  }
}

function InventarioProvider({ children }) {
  const [articulos, setArticulos] = useState(cargarArticulos)

  useEffect(() => {
    try {
      localStorage.setItem(CLAVE_GUARDADO, JSON.stringify(articulos))
    } catch {
      // Si el navegador no permite guardar, el inventario sigue funcionando sin persistir
    }
  }, [articulos])

  const agregarArticulo = (nuevoArticulo) => {
    setArticulos((anteriores) => [...anteriores, { ...nuevoArticulo, id: Date.now() }])
  }

  const eliminarArticulo = (id) => {
    setArticulos((anteriores) => anteriores.filter((articulo) => articulo.id !== id))
  }

  return (
    <InventarioContext.Provider value={{ articulos, agregarArticulo, eliminarArticulo }}>
      {children}
    </InventarioContext.Provider>
  )
}

export default InventarioProvider