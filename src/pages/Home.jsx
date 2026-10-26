import { useState } from 'react'
import productos from '../data/productos'

const coloresCategoria = {
  'Abarrotes': 'cat-amarillo',
  'Lácteos': 'cat-azul',
  'Panadería': 'cat-rosa',
  'Frutas y verduras': 'cat-lima',
  'Carnes': 'cat-rojo',
  'Limpieza': 'cat-azul',
  'Bebidas': 'cat-naranja',
}

function Home() {
  const [busqueda, setBusqueda] = useState('')

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    producto.categoria.toLowerCase().includes(busqueda.toLowerCase())
  )

  const totalProductos = productos.length
  const stockBajo = productos.filter((p) => p.stock > 0 && p.stock < p.stockMinimo).length
  const sinStock = productos.filter((p) => p.stock === 0).length

  const obtenerEstado = (producto) => {
    if (producto.stock === 0) return { texto: 'Sin stock', clase: 'estado-agotado' }
    if (producto.stock < producto.stockMinimo) return { texto: 'Stock bajo', clase: 'estado-bajo' }
    return { texto: 'Disponible', clase: 'estado-ok' }
  }

  return (
    <section>
      <header className="hero">
        <span className="etiqueta">Gestión de bodega</span>
        <h1>Inventario del<br />Supermercado</h1>
        <p>Revisa el estado de cada producto y detecta a tiempo lo que hay que reponer.</p>
      </header>

      <div className="resumen">
        <div className="tarjeta tarjeta-total">
          <span className="tarjeta-numero">{totalProductos}</span>
          <span className="tarjeta-texto">Productos</span>
        </div>
        <div className="tarjeta tarjeta-bajo">
          <span className="tarjeta-numero">{stockBajo}</span>
          <span className="tarjeta-texto">Stock bajo</span>
        </div>
        <div className="tarjeta tarjeta-agotado">
          <span className="tarjeta-numero">{sinStock}</span>
          <span className="tarjeta-texto">Sin stock</span>
        </div>
      </div>

      <input
        type="text"
        className="buscador"
        placeholder="Buscar por nombre o categoría..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="tabla-contenedor">
        <table className="tabla-inventario">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {productosFiltrados.map((producto) => {
              const estado = obtenerEstado(producto)
              return (
                <tr key={producto.id}>
                  <td className="celda-producto">{producto.nombre}</td>
                  <td>
                    <span className={`categoria ${coloresCategoria[producto.categoria]}`}>
                      {producto.categoria}
                    </span>
                  </td>
                  <td>${producto.precio.toLocaleString('es-CL')}</td>
                  <td>{producto.stock}</td>
                  <td>
                    <span className={`estado ${estado.clase}`}>{estado.texto}</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {productosFiltrados.length === 0 && (
          <p className="sin-resultados">No se encontraron productos.</p>
        )}
      </div>
    </section>
  )
}

export default Home