import type { RoutineItemTypes, NewRoutineTypes } from '../../types/types'
import { useState } from "react"
import './RoutineForm.scss';
import { buttonText } from '../../data/data';

interface Props {
    addRoutine: (routine: NewRoutineTypes) => void
}

const RoutineForm = ({addRoutine}: Props) => {
    const [time, setTime] = useState('')
    const [activity, setActivity] = useState('')

    const handleSubmit= (e: React.FormEvent) => {
        e.preventDefault();
        if (time && activity) {
            const item: RoutineItemTypes= {
                id: Date.now().toString(),
                name: activity,
                completed: false
            };
            addRoutine({name: activity, time:time, items: [item]});
            setTime('');
            setActivity('');
        }
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input
            className="form__input"
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)} 
            type='time'
            id='time'
            />
            <input
            className="form__input"
            placeholder="Task"
            value={activity}
            onChange={(e) => setActivity(e.target.value)} 
            type='text'
            id='task'
            />
            <button className='form__button'>{buttonText.addButton}</button>
        </form>
    )
}

export default RoutineForm