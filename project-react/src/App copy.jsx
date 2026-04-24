import './app.css'
import { TwitterFollowCard_copy } from './TwitterFollowCard_copy'

export function App() {

    // Tambien se pueden pasar funciones a los componentes
    const formarUsernName = (userName) => `@${userName}`

    const formattedUsername = <span>@midudev</span>

    return (
        //Asi es como se usa React.fragment, pero con la sintaxis de los componentes, es decir, con las etiquetas de apertura y cierre.
        <div className='App'>
            <TwitterFollowCard_copy
                formatedUserName={formattedUsername}
                formatUserName={formarUsernName}
                userName="duran_232"
                name="Avatar Duran"
                initialIsFollowing={true}
            />
            <TwitterFollowCard_copy
                formatedUserName={formattedUsername}
                formatUserName={formarUsernName}
                userName="engel_90"
                name="Angelito_96"
                initialIsFollowing={false}
            />
            <TwitterFollowCard_copy
                formatedUserName={formattedUsername}
                formatUserName={formarUsernName}
                userName="carlos"
                name="carlos002"
                initialIsFollowing={true}
            />

            { /* Cuando es una prop que sirve para inicializar un estado de escribe initialIsNombreDato como se ve en este ejemplo */ }

        </div>
    )
}