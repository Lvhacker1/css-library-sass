import { useEffect, useState } from 'react'
import './App.css'
import {type DailyRoutineTypes, type NewRoutineTypes } from './types/types'
import RoutineCard from './components/RoutineCard/RoutineCard';
import RoutineForm from './components/RoutineForm/RoutineForm';

function App() {

  const [routines, setRoutines] = useState<DailyRoutineTypes[]> ([]);

  useEffect(() => {
    const saved = localStorage.getItem('routines');
    if (saved) {
      setRoutines(JSON.parse(saved));
    }
  }, []);

  useEffect (() => {
    localStorage.setItem('routines', JSON.stringify(routines))
  }, [routines])

  const onAddRoutine = (routineData: NewRoutineTypes) => {
    const newRoutine: DailyRoutineTypes = {
      ...routineData,
      id: Date.now().toString()
    };
    setRoutines([...routines, newRoutine]);
  };

  const onDeleteRoutine = (id: string) => {
    setRoutines(routines.filter(r => r.id !== id))
  };

  const onToggleItem= (routineId: string, itemId: string) => {
    setRoutines(routines.map(routine => 
      routine.id === routineId
      ? {
        ...routine,
        items: routine.items.map(item =>
          item.id === itemId
          ? {...item, completed: !item.completed} : item
        )
      }
      : routine
    ))
  }




  return (
    <>
    <div>
      <RoutineForm addRoutine={onAddRoutine} />
      {routines.map (routine => (
        <RoutineCard
        key={routine.id}
        routine={routine}
        deleteRoutine={onDeleteRoutine}
        toggleItem={onToggleItem}
        />
      ))}
    </div>
    </>
  )
}

export default App
