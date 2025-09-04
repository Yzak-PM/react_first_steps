import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

// ! Renderizar componentes Harcodeados
// export function App() {
//     //& Podemos pasar una funcion como parametro
//     const format = (userName) => `@${userName}`
    
//     //& Podemos pasar un elemento de React como parametro
//     const formattedUserName = <span>@hardcoded_user</span>

//     return(
//         <section className='App'>
//             <TwitterFollowCard 
//                 formatUserName={format}
//                 formattedUserName={formattedUserName}
//                 initialIsFollowing={true}
//                 userName="miguel_duran" 
//                 name="Miguel Duran" >
//                 <i>New</i>
//             </TwitterFollowCard>

//             <TwitterFollowCard 
//                 formatUserName={format}
//                 formattedUserName={formattedUserName}
//                 initialIsFollowing={true}
//                 userName="gab_perez" 
//                 name="Gabriel Perez" >
//                 <i>New</i>
//             </TwitterFollowCard>

//             <TwitterFollowCard 
//                 formatUserName={format}
//                 formattedUserName={formattedUserName}
//                 initialIsFollowing={false}
//                 userName="aaron_landeros" 
//                 name="Aaron Landeros" >
//                 <i>Not New</i>
//             </TwitterFollowCard>

//             <TwitterFollowCard 
//                 formatUserName={format}
//                 formattedUserName={formattedUserName}
//                 initialIsFollowing={false}
//                 userName="josue_landeros" 
//                 name="Josue Landeros" >
//                 <i>Not New</i>
//             </TwitterFollowCard>
//         </section>
//     )
// }

const users = [
    {
        id: 1,
        userName: 'irismendoza',
        name: 'Iris Mendoza',
        isFollowing: true,
        status: 'Online'
    },
    {
        id: 2,
        userName: 'brianbarraza',
        name: 'Brian Barraza',
        isFollowing: false,
        status: 'Offline'
    },
    {
        id: 3,
        userName: 'josueland',
        name: 'Josue Landeros',
        isFollowing: true,
        status: 'Online'
    },
    {
        id: 4,
        userName: 'aaronland',
        name: 'Aaron Landeros',
        isFollowing: false,
        status: 'Offline'
    },
    {
        id: 5,
        userName: 'isaac_pm',
        name: 'Isaac Peña',
        isFollowing: false,
        status: 'Offline'
    }
]

export function App(){
    return(
        <section className='App'>
            {
                users.map(user =>{
                    const { id, userName, name, isFollowing, status } = user

                    //& Podemos pasar una funcion como parametro
                    const format = (userName) => `@${userName}`
                        
                    //& Podemos pasar un elemento de React como parametro
                    const formattedUserName = <span>@hardcoded_user</span>

                    return(
                        <TwitterFollowCard
                            key = {id}
                            userName = {userName}
                            name = {name}
                            initialIsFollowing = {isFollowing}
                            formatUserName = {format}
                            formattedUserName = {formattedUserName}
                        >
                            {status}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}