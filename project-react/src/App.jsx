import './app.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        id: 1,
        userName: "duran_232",
        name: "Avatar Duran",
        initialIsFollowing: true
    },
    {
        id: 2,
        userName: "engel_90",
        name: "Angelito_96",
        initialIsFollowing: false
    },
    {
        id: 3,
        userName: "carlos",
        name: "carlos002",
        initialIsFollowing: true
    },
    {
        id: 4,
        userName: "Matias",
        name: "Matias146",
        initialIsFollowing: false
    }
]

export function App() {
    return (
        //Asi es como se usa React.fragment, pero con la sintaxis de los componentes, es decir, con las etiquetas de apertura y cierre.
        <div className='App'>
            {
                users.map(({ userName, name, initialIsFollowing, id }) => {

                    {/* 
                        La key es importante colocarlo ya que identifica al elemento del DOM se coloca un atributo que es unico
                        React la usa internamente para identificar cada elemento
                    */}
                    return (
                        <TwitterFollowCard
                            key={id}
                            name={name}
                            userName={userName}
                            initialIsFollowing={initialIsFollowing}
                        />
                    )
                })
            }
        </div>
    )
}