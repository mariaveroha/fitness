import React, { useState } from "react";
import Program from "../Program/Program";
const Programs = () => {

    const [program, setProgram] = useState([
        { id: 1, number: '01', name: 'Workout at Home', video: '15 videos'  },
        { id: 2, number: '02', name: 'Stay Strong and Fit', video: '25 videos'},
        { id: 3, number: '03', name: 'High Intensity', video: '48 videos' },
        { id: 4, number: '04', name: 'Simple Workout', video: '35 videos'},
        { id: 5, number: '05', name: 'Burn Calories', video: '35 videos'},
    ])
    return (
        <div>
            {
                program.map((program, key) =>
                    <Program program={program} key={program.id} />)
            }
        </div>
    )
}

export default Programs