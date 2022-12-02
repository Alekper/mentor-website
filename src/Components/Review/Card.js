import React, { useState } from "react";

export default function Crad(props) {
    const [buttonStatus, setButtonStatus] = useState(false)
    const toggleStyle = {
        background: buttonStatus ? 'rgb(111, 18, 2)' : "rgb(255, 151, 25)",
        right: buttonStatus ? '42%' : '0%'

    }

    const imgStyle = {
        filter: buttonStatus ? 'blur(0)' : 'blur(2px)'
    }

    return (
        <div className="main-container">

            <div className="card" style={{ overflowY: buttonStatus ? 'auto' : 'hidden' }}>
                {
                    !buttonStatus ?
                        <p>{props.text}</p>
                        : null
                }
                <button className='card-btn'>
                    <img src={props.img} style={imgStyle} onClick={() => setButtonStatus(!buttonStatus)} className='screenshot' alt="rev" />
                </button>

            </div>
            <span className='change-container'>
                <button style={toggleStyle} onClick={() => setButtonStatus(!buttonStatus)} className='change'></button>
            </span>
        </div>
    )
}