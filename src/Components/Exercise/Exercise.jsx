import React from "react";
import s from './Exercise.module.css'
const Exercise = (props) => {
    return (
        <div className={s.exercise}>
            <div className={s.img}>
                <img src={props.exercise.img} className={s.img} />
            </div>

            <p className={s.name}>{props.exercise.name}</p>
            <p className={s.calories}>{props.exercise.calories}</p>
            <span className={s.time}>{props.exercise.time}</span>
        </div>
    )
}

export default Exercise