import type { ReactNode } from "react"
import styles from './Button.module.css' // Para importar estilos CSS

type Props = {
    children: ReactNode
    isLoading?: boolean
    onClick: () => void
}

function Button({ children, isLoading, onClick }: Props){
    return (
        <button onClick={onClick} disabled={isLoading} type="button" className={[styles.button, styles.padded].join(' ')} /*className={`btn btn-${isLoading ? 'secondary' : 'primary'}`}*/ >{isLoading ? 'Cargando...' : children}</button>
    )
}

export default Button