import './app.css'
import { useState } from 'react'

export function TwitterFollowCard({ formatedUserName, formatUserName, name, initialIsFollowing }) {

    //Para definir el valor por defecto o inicial de nuestro estado
    //Devuelve un array con dos posiciones, el valor del estado y una función para actualizarlo
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    /*
    //El valor del estado
    const isFollowingState = state[0]

    //Una funcion para actualizar el estado
    const setIsFollowing = state[1]
    */

    const imageSrc = "https://www.w3schools.com/w3images/avatar2.png"

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="avatar" src={imageSrc} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(name)}</span>
                    <span className='tw-followCard-infoUserName'>{formatedUserName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}