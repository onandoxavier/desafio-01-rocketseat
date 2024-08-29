import { PlusCircle } from 'phosphor-react'
import './FormTask.module.css'
import { ChangeEvent, FormEvent, useState } from 'react';
import { TaskItemType } from './TaskItem';

interface FormTaskProps {
    newTask: string;    
    OnCreateTask: (event: TaskItemType) => void;
}

export function FormTask({ OnCreateTask } : FormTaskProps){

    const [newTaskText, setNewTaskText] = useState('');

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();
        console.log('aconteceu o evento');
        const newTaskItem : TaskItemType = {
            id: 0,
            description: newTaskText,
            isFinished: false
        };

        OnCreateTask(newTaskItem);
        setNewTaskText('');
    }

    function handleNewTaskChance(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    return (
        <>
            <form onSubmit={handleCreateNewTask}>
                <input 
                    type="text" 
                    placeholder='Adicione uma nova tarefa'
                    onChange={handleNewTaskChance}
                    value={newTaskText}/>
                <button type="submit">Criar <PlusCircle size={16}/> </button>
            </form>
        </>
    )
}