import React, { useRef } from 'react';
import './videoPlayer.css'
import Video from '/public/vid.mp4'

const videoPlayer = ({playState,setPlayState}) => {
   
    const player = useRef(null);
    
    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayState(false)
        }
            
    }

    return (
        <div className={`video-player ${playState?"" : "hide"}`} ref = {player}
        onClick={closePlayer}>
            <video src={Video} autoPlay muted controls></video>
        </div>
    )
}
export default videoPlayer;