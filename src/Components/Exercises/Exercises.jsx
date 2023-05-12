import React, { useState } from "react";
import s from './Exercises.module.css'
import Exercise from '../Exercise/Exercise'
import treadmill from '../../images/treadmill.svg'
import stretching from '../../images/stretching.svg'
import yoga from '../../images/yoga.svg'
import running from '../../images/running.svg'
import lifting from '../../images/lifting.svg'
import pushup from '../../images/pushup.svg'
const Exercises = () => {
    const [exercise, setExercise] = useState([
        { id: 1, img: treadmill, name: 'Treadmill', calories: '250 est calories ', time: '58:24' },
        { id: 2, img: stretching, name: 'Stretching', calories: '250 est calories ', time: '58:24' },
        { id: 3, img: yoga, name: 'Yoga', calories: '250 est calories ', time: '58:24' },
        { id: 4, img: running, name: 'Running', calories: '250 est calories ', time: '58:24' },
        { id: 5, img: lifting, name: 'Lifting', calories: '250 est calories ', time: '58:24' },
        { id: 6, img: pushup, name: 'PushUp', calories: '250 est calories ', time: '58:24' }
    ])
    return (
        <div className={s.exercises}>
            <div className={s.title}>
                <span className={s.popular}>Popular Exercises</span>
                <span className={s.more}>SEE MORE EXERCISES</span>
            </div>
            <div className={s.block}>
                {exercise.map((exercises, key) =>
                    <Exercise exercise={exercises} key={exercises.id} />
                )}
            </div>
        </div>
    )
}

export default Exercises