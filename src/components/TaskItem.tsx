import { Trash } from 'phosphor-react'
import style from './TaskItem.module.css'
import { ChangeEvent, useState } from 'react';

export interface TaskItemType {
    id: number;
    description: string;
    isFinished: boolean
}

interface TaskItemProps{
    task : TaskItemType
    OnDeleteTask: (id: number) => void;
}

export function TaskItem({task, OnDeleteTask}: TaskItemProps){
    const [isFinished, setFinished] = useState(task.isFinished);

    function handleSetFinished(event: ChangeEvent<HTMLInputElement>){
        setFinished(event.target.checked);
        console.log(isFinished)
    }

    function handleDeleteTask(){
        OnDeleteTask(task.id);
    }

    return (
        <>
            <div className={style.card}>                
                <input
                    type="checkbox" 
                    checked={isFinished}
                    onChange ={handleSetFinished} />                
                <span>{task.description}</span>
                <button onClick={handleDeleteTask} title="Deletar task">
                    <Trash size={24}/>
                </button>
            </div>   
        </>
    )
}