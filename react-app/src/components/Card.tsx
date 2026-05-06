import type { ReactNode } from "react"

// Crear una interface de las propiedades indicandole las propiedades que tendra
interface Props {
    children: ReactNode;
}

// Aqui props es igual a la interface "Props" para que no salga el error "any implicity"
function Card(props: Props) {

    // Destructurando "props"
    const { children } = props

    return (
        <div className="card" style={{ width: "350px" }}>
            <div className="card-body">{children}</div>
        </div>
    )
}

interface CardBodyProps {
    title: string,
    text?: string // Con el "?" se indica que puede ser vacio
}

export function CardBody(props: CardBodyProps) {

    const { title, text } = props

    return (
        <>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
        </>
    )
}

export default Card;