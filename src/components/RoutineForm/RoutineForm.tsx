import type { RoutineItemTypes, NewRoutineTypes } from '../../types/types'
import { useState } from "react"
import './RoutineForm.scss';


interface Props {
    addRoutine: (routine: NewRoutineTypes) => void
}

const RoutineForm = ({addRoutine}: Props) => {
    const [name, setName] = useState('')
    const [activity, setActivity] = useState('')

    const handleSubmit= (e: React.FormEvent) => {
        e.preventDefault();
        if (name && activity) {
            const item: RoutineItemTypes= {
                id: Date.now().toString(),
                name: activity,
                completed: false
            };
            addRoutine({name, items: [item]});
            setName('');
            setActivity('');
        }
    }



    return (
        <form className='form' onSubmit={handleSubmit}>
            <input
            className="form__input"
            placeholder="blabla"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            />
            <input
            className="form__input"
            placeholder="blablabla"
            value={activity}
            onChange={(e) => setActivity(e.target.value)} 
            />
            <button className='form__button'>Add Routineeeeeee</button>
        </form>

    )
}

export default RoutineForm