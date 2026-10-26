const valores = [
    {
        titulo: 'Frescura',
        descripcion: 'Ofrecemos productos frescos y de alta calidad para nuestros clientes.',
        color: 'valor-lima',
    },
    {
        titulo: 'Precio justo',
        descripcion: 'Nos aseguramos de que nuestros precios sean competitivos y accesibles para todos.',
        color: 'valor-amarillo',
    },
    {
        titulo: 'Cercanía',
        descripcion: 'Estamos comprometidos con nuestra comunidad y nos esforzamos por brindar un servicio cercano y amigable.',
        color: 'valor-rosa',
    },
]

const cifras = [
    { numero: '25+', texto: 'Años de histpria' },
    { numero: '8', texto: 'Tiendas en la región' },
    { numero: '3.000', texto: 'Productos en bodega' },
    { numero: '120', texto: 'Trabajadores' },
]

function QuienesSomos() {
    return (
        <section>
            <header className="hero hero=verde">
                <span className="etiqueta">Nuesta historia</span>
                <h1>Quiénes<br />somos</h1>
                <p>Un emprendimiento pequeño que fue creciendo.</p>
            </header>

            <article className="bloque">
                <h2>Desde la región, para el mundo.</h2>
                <p>
                    Somos una empresa familiar que nació en la región de Los Lagos, con el objetivo de ofrecer productos frescos y de alta calidad a nuestros clientes. A lo largo de los años, hemos crecido y nos hemos expandido, pero siempre manteniendo nuestros valores fundamentales de frescura, precio justo y cercanía con nuestra comunidad.
                </p>
                <p>
                    Hoy usamos este sistema de inventario para saber qué tenemos en bodega en todo momento, para poder reponer a tiempo y asegurarnos de que nunca falte ningún producto.
                </p>
            </article>

            <h2 classNmae="titulo-seccion">Lo que nos mueve</h2>
            <div className="grid-valores">
                {valores.map((valor) => (
                    <div key={valor.titulo} className={`valor ${valor.color}`}>
                        <h3>{valor.titulo}</h3>
                        <p>{valor.descripcion}</p>
                    </div>
                ))}
            </div>

            <div className="cifras">
                {cifras.map((cifra) => (
                    <div key={cifra.texto} className="cifra">
                        <span className="cifra-numero">{cifra.numero}</span>
                        <span className="cifra-texto">{cifra.texto}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default QuienesSomos