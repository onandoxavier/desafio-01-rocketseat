import style from './TaskHandler.module.css'
import { FormTask } from './FormTask'
import { TaskHeader } from './TaskHeader'
import { TaskList } from './TaskList'
import { TaskItemType } from './TaskItem'
import { useState } from 'react'

const taskList: TaskItemType[] = [
    {
        id: 0,
        description: 'Levantar da cama',
        isFinished: true
    },
    {
        id: 1,
        description: 'Escovar os dentes',
        isFinished: false
    },
    {
        id: 2,
        description: 'Tomar café',
        isFinished: false
    }
];

export function TaskHandler(){
    const [tasks, setTasks] = useState(taskList);
    const [newTask, setNewTask] = useState('');
    
    function getNewId() {
        return Math.floor(Math.random() * 1001);
    }

    function handleCreateNewTask(newTaskItem: TaskItemType) { 
        const newId = getNewId();    
        console.log(newId);
        newTaskItem.id = newId
        setTasks([...tasks, newTaskItem]);
        setNewTask('');
    };

    function deleteTask(id: number) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id !== id;
        });

        setTasks(tasksWithoutDeletedOne);
    }

    return (
        <>
            <div className={style.taskHandler}>
                <FormTask
                    newTask={newTask}
                    OnCreateTask={handleCreateNewTask}
                />          
                <section> 
                    <TaskHeader tasks={tasks}/>
                    <TaskList 
                        tasks={tasks}
                        OnDeleteTask={deleteTask} />
                </section>
            </div>         
        </>
    )
}