import React from "react";
import s from './Banner.module.css'
import girl from '../../images/main_girl.svg'
const Banner = () => {
    return (
        <>
            <div className={s.banner}>
                <button className={s.buttonWorkout}>
                    <span className={s.new}>NEW</span>
                    <span className={s.buttonText}>High Intensity workout to burn calories</span>
                </button>
                <div className={s.bannerImage}>
                    <p className={s.title}>Cardio Exercise</p>
                    <p className={s.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={s.buttons}>
                    <button className={s.time}>
                        <div className={s.text}>
                            <span className={s.timeNumber}>38:14</span>
                            <span className={s.smallText}>TIME</span>
                        </div>
                    </button>
                    <button className={s.calories}>
                        <div className={s.text}>
                            <span className={s.caloriesNumber}>165</span>
                            <span className={s.smallText}>EST CALORIES</span>
                        </div>
                    </button>
                </div>
                <button className={s.start}>Get Started</button>
                <button className={s.preview}>Preview</button>
            </div>
            <img className={s.girl} src={girl} />
        </>

    )
}

export default Banner