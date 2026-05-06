import { useState } from "react";

type Props = {
    data: string[];
    onSelect?: (item: string) => void;
}

function List({ data, onSelect }: Props) {
    // useState es para inicializar la variable
    // devuelven dos posiciones
    // la primera posicion es la variable que vamos a utilizar
    // la segunda posicion es para modificar el valor
    // cada vez que llamemos el metodo "set", volver a ejecutar el componente con el nuevo valor
    const [index, setIndex] = useState(1) 

    const handleClick = (i: number, item: string) => {
        setIndex(i)
        onSelect?.(item)
    }

    return (
        <ul className="list-group">
            {data.map((item, i) => (
                <li onClick={() => handleClick(i, item)} className={`list-group-item ${index == i ? "active" : ""}`}>{item}</li>
            ))}
        </ul>
    )
}

export default List;