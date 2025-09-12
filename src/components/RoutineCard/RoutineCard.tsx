import type { DailyRoutineTypes } from "../../types/types";

interface Props {
    routine: DailyRoutineTypes;
    deleteRoutine: (id:string) => void;
    toggleItem: (routineId: string, itemId: string) => void;
}

const RoutineCard = ({routine, deleteRoutine, toggleItem}: Props) => {
    return (
        <div>
            <div>
                <h3>{routine.name}</h3>
                <button onClick={() => deleteRoutine(routine.id)}></button>
            </div>
            {routine.items.map(item => (
                <div key={item.id}>
                    <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleItem(routine.id, item.id)} />
                    <span>{item.name}</span>
                </div>
            ))}

        </div>
    )
}

export default RoutineCard