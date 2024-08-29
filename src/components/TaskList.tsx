import { TaskItem, TaskItemType } from './TaskItem'
import style from './TaskList.module.css'

interface TaskListProps {
    tasks: TaskItemType[];
    OnDeleteTask: (id: number) => void;
}

export function TaskList({tasks, OnDeleteTask }:TaskListProps){
    return (
        <>
            <div className={style.taskList}>
                {tasks.map( item => {
                    return (                        
                        <TaskItem
                            key={item.id}
                            task={item}
                            OnDeleteTask= {OnDeleteTask}
                        />
                    )
                })}           
            </div>
        </>
    )
}