import type { DailyRoutineTypes } from "../../types/types";

interface Props {
    routine: DailyRoutineTypes;
    deleteRoutine: (id:string) => void;
    toggleItem: (routineId: string, itemId: string) => void;
}

const RoutineCard = ({routine, deleteRoutine, toggleItem}: Props) => {
    return (
        <div className="card">
            <div>
                <h3 className="card__title">{routine.name}</h3>
                <button className="card__button" onClick={() => deleteRoutine(routine.id)}></button>
            </div>
            {routine.items.map(item => (
                <div key={item.id} className="card__item">
                    <input
                    className="card__checkbox"
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleItem(routine.id, item.id)} />
                    <span className={`card__text ${item.completed ? 'card__text--completed' : ''}`}>
                        {item.name}</span>
                </div>
            ))}

        </div>
    )
}

export default RoutineCard