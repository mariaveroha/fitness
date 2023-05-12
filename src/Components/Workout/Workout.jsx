import React from "react";
import s from './Workout.module.css'
import paint from '../../images/paint.svg'
import jhonathan from '../../images/jhonathan.svg'
import karen from '../../images/karen.svg'
import samantha from '../../images/samantha.svg'
const Workout = () => {
    return (
        <div className={s.workout}>
            <div className={s.banner}>
                <div>
                    <p className={s.title}>Workout Program Made For You</p>
                    <img src={paint} className={s.paint} />
                </div>
                <div className={s.grey}>
                    <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.
                    </p>
                    <button className={s.start}>Get Started</button>
                    <img src={jhonathan} className={s.jhonathan} />
                    <p className={s.nameJ}>Jonathan Wise</p>
                <p className={s.trainJ}>Trainer</p>
                </div>
            </div>
            <div className={s.trainer}>
                <img src={samantha} className={s.samantha} />
                <p className={s.name}>Samantha William</p>
                <p className={s.train}>Trainer</p>
            </div>
            <div>
            <img src={karen} className={s.karen} />
                <p className={s.nameK}>Karen Summer</p>
                <p className={s.trainK}>Trainer</p>
            </div>
          

        </div>
    )
}

export default Workout