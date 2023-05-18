import React, { useState } from "react";
import s from './Program.module.css'
const Program = (props) => {

    return (
        <div className={s.program}>
            <p className={s.number}>{props.program.number}</p>
            <div className={s.block}>
                <p className={s.name}>{props.program.name}</p>
                <p className={s.video}>{props.program.video}</p>
            </div>
            <button className={s.r}>&rarr;</button>
           
        </div>
    )
}

export default Program