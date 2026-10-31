import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInventario, tiposProducto } from '../context/InventarioContext'

const formularioVacio = {
  nombre: '',
  marca: '',
  tipo: '',
  cantidad: '',
}

const claseInput =
  'w-full rounded-xl border-2 border-verde bg-crema px-4 py-3 text-base text-verde placeholder:text-verde/50 transition-shadow focus:outline-none focus:shadow-retro-naranja'

const claseEtiqueta = 'text-xs font-extrabold uppercase tracking-widest'

function AgregarArticulo() {
  const { articulos, agregarArticulo } = useInventario()
  const [formulario, setFormulario] = useState(formularioVacio)
  const [errores, setErrores] = useState({})
  const [ultimoAgregado, setUltimoAgregado] = useState('')

  const manejarCambio = (e) => {
    const { name, value } = e.target
    setFormulario({ ...formulario, [name]: value })
    setErrores({ ...errores, [name]: '' })
  }

  const validar = () => {
    const nuevosErrores = {}

    if (formulario.nombre.trim() === '') {
      nuevosErrores.nombre = 'Ingresa el nombre del artículo.'
    }

    if (formulario.marca.trim() === '') {
      nuevosErrores.marca = 'Ingresa la marca.'
    }

    if (formulario.tipo === '') {
      nuevosErrores.tipo = 'Selecciona un tipo de producto.'
    }

    const cantidad = Number(formulario.cantidad)
    if (formulario.cantidad === '' || !Number.isInteger(cantidad) || cantidad < 0) {
      nuevosErrores.cantidad = 'Ingresa una cantidad entera igual o mayor a 0.'
    }

    return nuevosErrores
  }

  const manejarEnvio = (e) => {
    e.preventDefault()
    const nuevosErrores = validar()

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      setUltimoAgregado('')
      return
    }

    agregarArticulo({
      nombre: formulario.nombre.trim(),
      marca: formulario.marca.trim(),
      tipo: formulario.tipo,
      cantidad: Number(formulario.cantidad),
    })

    setUltimoAgregado(formulario.nombre.trim())
    setFormulario(formularioVacio)
  }

  return (
    <section>
      <header className="relative mb-8 overflow-hidden rounded-2xl border-2 border-verde bg-lima p-6 shadow-retro sm:p-10">
        <div className="absolute -top-20 -right-16 size-64 rounded-full bg-naranja" />
        <div className="absolute -bottom-16 right-40 hidden size-32 rounded-full bg-amarillo sm:block" />

        <div className="relative">
          <span className="inline-block rounded-full bg-verde px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.12em] text-crema">
            Nuevo ingreso
          </span>
          <h1 className="mt-3 mb-4 font-titulo text-4xl font-extrabold sm:text-6xl">
            Agregar<br />artículo
          </h1>
          <p className="max-w-md text-lg">
            Registra un producto nuevo. Actualmente hay{' '}
            <strong>{articulos.length} artículos</strong> en el inventario.
          </p>
        </div>
      </header>

      {ultimoAgregado && (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border-2 border-verde bg-amarillo px-6 py-4 shadow-retro">
          <p className="font-bold">✔ "{ultimoAgregado}" se agregó al inventario.</p>
          <Link
            to="/inventario"
            className="rounded-full bg-verde px-4 py-2 text-sm font-bold uppercase tracking-wider text-crema hover:bg-verde/85"
          >
            Ver inventario
          </Link>
        </div>
      )}

      <form
        onSubmit={manejarEnvio}
        noValidate
        className="grid gap-5 rounded-2xl border-2 border-verde bg-white p-6 shadow-retro sm:grid-cols-2 sm:p-8"
      >
        <label className="flex flex-col gap-1.5">
          <span className={claseEtiqueta}>Nombre</span>
          <input
            type="text"
            name="nombre"
            placeholder="Ej: Fideos spaghetti (400 g)"
            value={formulario.nombre}
            onChange={manejarCambio}
            className={claseInput}
          />
          {errores.nombre && <span className="text-sm font-bold text-rojo">{errores.nombre}</span>}
        </label>

        <label className="flex flex-col gap-1.5">
          <span className={claseEtiqueta}>Marca</span>
          <input
            type="text"
            name="marca"
            placeholder="Ej: Carozzi"
            value={formulario.marca}
            onChange={manejarCambio}
            className={claseInput}
          />
          {errores.marca && <span className="text-sm font-bold text-rojo">{errores.marca}</span>}
        </label>

        <label className="flex flex-col gap-1.5">
          <span className={claseEtiqueta}>Tipo de producto</span>
          <select name="tipo" value={formulario.tipo} onChange={manejarCambio} className={claseInput}>
            <option value="">Selecciona un tipo...</option>
            {tiposProducto.map((tipo) => (
              <option key={tipo} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>
          {errores.tipo && <span className="text-sm font-bold text-rojo">{errores.tipo}</span>}
        </label>

        <label className="flex flex-col gap-1.5">
          <span className={claseEtiqueta}>Cantidad</span>
          <input
            type="number"
            name="cantidad"
            min="0"
            placeholder="Ej: 50"
            value={formulario.cantidad}
            onChange={manejarCambio}
            className={claseInput}
          />
          {errores.cantidad && <span className="text-sm font-bold text-rojo">{errores.cantidad}</span>}
        </label>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="cursor-pointer rounded-full border-2 border-verde bg-naranja px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-crema shadow-retro transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
          >
            Agregar al inventario
          </button>
        </div>
      </form>
    </section>
  )
}

export default AgregarArticulo