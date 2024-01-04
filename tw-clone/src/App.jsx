import { WhoToFollow } from "./whoFollow";
import './Style/app.css';

export function App(){
    return(
        <article className="containerFollow">
            <h1 className="titleFollow">Who to Follow</h1>
            <>
                <WhoToFollow initialIsFollowing={true} name={"Juan Pablo Davila Cano"} userName={"jpdavila00"}/>
                <WhoToFollow isFollowing={ false } name={"Cristobal Colon"} userName={"CritobalF80"}/>
                <WhoToFollow isFollowing name={"Rocky Balboa"} userName={"Balboa65"}/>
                <WhoToFollow isFollowing name={"Roberto Restrepo"} userName={"Fergusonxxx"}/>
            </>
        </article>
        
    )
} 