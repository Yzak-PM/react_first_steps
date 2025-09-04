//& useState es un hook de React que permite a un componente funcional tener y manejar un estado interno.
import { useState } from 'react'

export function TwitterFollowCard({children, formatUserName, formattedUserName, userName, name, initialIsFollowing}) {
    
    //* 1.	isFollowing → es la variable de estado. Empieza en false porque se inicializa con useState(false).
	//* 2.	setIsFollowing → es la función que actualiza el estado.
	//* 3.	Cada vez que setIsFollowing se ejecuta, React vuelve a renderizar el componente con el nuevo valor.
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)


    const isFollowingText = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following' : 'tw-followCard-button'


    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://avatar.iran.liara.run/username?username=${name}`} alt="Un avatar" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span>{children}</span>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                    <span className='tw-followCard-infoUserName'>{formattedUserName}</span>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{isFollowingText}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}