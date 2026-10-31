import { NavLink } from 'react-router-dom'

const claseBase =
  'rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-colors'

function MenuSuperior() {
  return (
    <header className="sticky top-0 z-20 border-b-2 border-verde bg-verde shadow-retro-naranja">
      <div className="mx-auto flex max-w-[1040px] flex-wrap items-center justify-between gap-3 px-5 py-3">
        <NavLink to="/" className="font-titulo text-2xl font-extrabold text-crema">
          Super<span className="text-amarillo">mercado</span>
        </NavLink>

        <nav className="flex gap-2">
          <NavLink
            to="/agregar"
            className={({ isActive }) =>
              `${claseBase} ${isActive ? 'bg-amarillo text-verde' : 'text-crema hover:bg-crema/15'}`
            }
          >
            Agregar artículo
          </NavLink>
          <NavLink
            to="/inventario"
            className={({ isActive }) =>
              `${claseBase} ${isActive ? 'bg-amarillo text-verde' : 'text-crema hover:bg-crema/15'}`
            }
          >
            Inventario
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default MenuSuperior