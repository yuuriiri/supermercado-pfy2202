import { useState } from 'react'

const datosContacto = [
  { titulo: 'Dirección', valor: 'Av. Siempre Viva 1234, Santiago' },
  { titulo: 'Teléfono', valor: '+56 2 2345 6789' },
  { titulo: 'Correo', valor: 'contacto@supermercado-ejemplo.cl' },
  { titulo: 'Horario', valor: 'Lunes a domingo, 8:00 a 22:00' },
]

const formularioVacio = {
  nombre: '',
  correo: '',
  asunto: 'Consulta general',
  mensaje: '',
}

function Contactanos() {
  const [formulario, setFormulario] = useState(formularioVacio)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const manejarCambio = (e) => {
    const { name, value } = e.target
    setFormulario({ ...formulario, [name]: value })
    setErrores({ ...errores, [name]: '' })
  }

  const validar = () => {
    const nuevosErrores = {}

    if (formulario.nombre.trim() === '') {
      nuevosErrores.nombre = 'Ingresa tu nombre.'
    }

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!correoValido.test(formulario.correo)) {
      nuevosErrores.correo = 'Ingresa un correo válido.'
    }

    if (formulario.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
    }

    return nuevosErrores
  }

  const manejarEnvio = (e) => {
    e.preventDefault()
    const nuevosErrores = validar()

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      return
    }

    setEnviado(true)
    setFormulario(formularioVacio)
  }

  return (
    <section>
      <header className="hero hero-azul">
        <span className="etiqueta">Estamos para ayudarte</span>
        <h1>Contác<br />tanos</h1>
        <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos.</p>
      </header>

      <div className="contacto-grid">
        <div className="datos-contacto">
          {datosContacto.map((dato) => (
            <div key={dato.titulo} className="dato">
              <span className="dato-titulo">{dato.titulo}</span>
              <span className="dato-valor">{dato.valor}</span>
            </div>
          ))}
        </div>

        <div className="bloque">
          {enviado ? (
            <div className="mensaje-exito">
              <h2>¡Gracias por tu mensaje!</h2>
              <p>Nos pondremos en contacto contigo lo antes posible.</p>
              <button className="boton" onClick={() => setEnviado(false)}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form className="formulario" onSubmit={manejarEnvio} noValidate>
              <h2>Envíanos un mensaje</h2>

              <label>
                Nombre
                <input
                  type="text"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                />
                {errores.nombre && <span className="error">{errores.nombre}</span>}
              </label>

              <label>
                Correo
                <input
                  type="email"
                  name="correo"
                  value={formulario.correo}
                  onChange={manejarCambio}
                />
                {errores.correo && <span className="error">{errores.correo}</span>}
              </label>

              <label>
                Asunto
                <select name="asunto" value={formulario.asunto} onChange={manejarCambio}>
                  <option>Consulta general</option>
                  <option>Quiero ser proveedor</option>
                  <option>Reclamo</option>
                  <option>Sugerencia</option>
                </select>
              </label>

              <label>
                Mensaje
                <textarea
                  name="mensaje"
                  rows="5"
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                />
                {errores.mensaje && <span className="error">{errores.mensaje}</span>}
              </label>

              <button type="submit" className="boton">Enviar mensaje</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contactanos