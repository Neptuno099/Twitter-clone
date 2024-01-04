import { useState } from 'react'
import './Style/whoFollow.css'

export function WhoToFollow ({ userName, name, initialIsFollowing }){
    // Funcionalidad de click con useState

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    // Funcionalidad boton follow si lo sigo o no, me devuelve un false o true

    const text = isFollowing ? "Following" : "Follow"

    // Funcionalidad cambiar color con operador ternario

    const buttonClassName = isFollowing ? "buttonFollow is-following" : "buttonFollow"

    return(
            <header className="containerAvatar">
                <img className="imgAvatar" src={`https://unavatar.io/${ userName }`} alt="Avatar twitter" />
                <div className="avatarNames">
                    <strong className="name">{ name }</strong>
                    <span className="userName">@{ userName }</span>
                </div>
                <aside className="asideButtonFollow">
                    <button className={ buttonClassName } onClick={handleClick}>{ text }</button>
                </aside>
            </header>
    )
}