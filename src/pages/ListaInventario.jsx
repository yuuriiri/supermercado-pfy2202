import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInventario, tiposProducto } from '../context/InventarioContext'

const coloresTipo = {
  'Abarrotes': 'bg-amarillo',
  'Lácteos': 'bg-azul',
  'Panadería': 'bg-rosa',
  'Frutas y verduras': 'bg-lima',
  'Carnes': 'bg-rojo text-crema',
  'Bebidas': 'bg-naranja text-crema',
  'Limpieza': 'bg-azul',
}

function ListaInventario() {
  const { articulos, eliminarArticulo } = useInventario()
  const [busqueda, setBusqueda] = useState('')
  const [filtroTipo, setFiltroTipo] = useState('Todos')

  const articulosFiltrados = articulos.filter((articulo) => {
    const texto = busqueda.toLowerCase()
    const coincideTexto =
      articulo.nombre.toLowerCase().includes(texto) ||
      articulo.marca.toLowerCase().includes(texto)
    const coincideTipo = filtroTipo === 'Todos' || articulo.tipo === filtroTipo
    return coincideTexto && coincideTipo
  })

  const totalUnidades = articulos.reduce((suma, articulo) => suma + articulo.cantidad, 0)

  const confirmarEliminar = (articulo) => {
    if (window.confirm(`¿Eliminar "${articulo.nombre}" del inventario?`)) {
      eliminarArticulo(articulo.id)
    }
  }

  return (
    <section>
      <header className="relative mb-8 overflow-hidden rounded-2xl border-2 border-verde bg-rosa p-6 shadow-retro sm:p-10">
        <div className="absolute -top-20 -right-16 size-64 rounded-full bg-amarillo" />
        <div className="absolute -bottom-16 right-40 hidden size-32 rounded-full bg-azul sm:block" />

        <div className="relative">
          <span className="inline-block rounded-full bg-verde px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-crema">
            Bodega
          </span>
          <h1 className="mt-3 mb-4 font-titulo text-4xl font-extrabold sm:text-6xl">
            Inventario
          </h1>
          <p className="max-w-md text-lg">
            <strong>{articulos.length}</strong> artículos registrados ·{' '}
            <strong>{totalUnidades.toLocaleString('es-CL')}</strong> unidades en total
          </p>
        </div>
      </header>

      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Buscar por nombre o marca..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="flex-1 rounded-xl border-2 border-verde bg-white px-4 py-3 text-verde placeholder:text-verde/50 transition-shadow focus:outline-none focus:shadow-retro-naranja"
        />
        <select
          value={filtroTipo}
          onChange={(e) => setFiltroTipo(e.target.value)}
          className="rounded-xl border-2 border-verde bg-white px-4 py-3 font-bold text-verde focus:outline-none focus:shadow-retro-naranja"
        >
          <option value="Todos">Todos los tipos</option>
          {tiposProducto.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto rounded-2xl border-2 border-verde bg-white shadow-retro">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {['Nombre', 'Marca', 'Tipo', 'Cantidad', ''].map((columna) => (
                <th
                  key={columna}
                  className="bg-verde px-5 py-3.5 text-left text-xs font-extrabold uppercase tracking-widest whitespace-nowrap text-crema"
                >
                  {columna}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {articulosFiltrados.map((articulo) => (
              <tr
                key={articulo.id}
                className="border-b border-dashed border-verde/30 last:border-b-0 even:bg-crema hover:bg-amarillo/40"
              >
                <td className="px-5 py-3.5 font-bold whitespace-nowrap">{articulo.nombre}</td>
                <td className="px-5 py-3.5 whitespace-nowrap">{articulo.marca}</td>
                <td className="px-5 py-3.5 whitespace-nowrap">
                  <span
                    className={`inline-block rounded-full border-[1.5px] border-verde px-3 py-1 text-xs font-bold ${coloresTipo[articulo.tipo]}`}
                  >
                    {articulo.tipo}
                  </span>
                </td>
                <td
                  className={`px-5 py-3.5 whitespace-nowrap ${articulo.cantidad === 0 ? 'font-extrabold text-rojo' : ''}`}
                >
                  {articulo.cantidad === 0 ? 'Agotado' : articulo.cantidad}
                </td>
                <td className="px-5 py-3.5 text-right whitespace-nowrap">
                  <button
                    onClick={() => confirmarEliminar(articulo)}
                    className="cursor-pointer rounded-full border-2 border-rojo px-3 py-1 text-xs font-bold uppercase tracking-wider text-rojo transition-colors hover:bg-rojo hover:text-crema"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {articulosFiltrados.length === 0 && (
          <div className="flex flex-col items-center gap-3 p-8 text-center">
            <p className="font-bold">No hay artículos que coincidan.</p>
            <Link
              to="/agregar"
              className="rounded-full bg-naranja px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-crema"
            >
              Agregar un artículo
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default ListaInventario