import React from 'react'
import { useSelector } from 'react-redux'

export default function MessagePopup(props) {
    const isRunning = useSelector((state) => state.game.isRunning);
    const gameOver = useSelector((state) => state.game.gameOver);
    let msg = "";
    let hidden = "";
    if(isRunning && !gameOver) {
        hidden = "hidden";
    }
    if(gameOver) {
        msg = "Game Over";
    }
    else if(!isRunning) {
        msg = "Paused";
    }
    return (
        <div className={`message-popup ${hidden}`}>
            <h1>{msg}</h1>
        </div>
    );
}