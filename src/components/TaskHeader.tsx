import style from './TaskHeader.module.css'
import { TaskItemType } from './TaskItem';

interface TaskHeaderProps {
    tasks: TaskItemType[]
}

export function TaskHeader({tasks} : TaskHeaderProps) {    
    const finishedTotal = tasks.filter(task => task.isFinished).length;

    return (
        <>
            <div className={style.c_taskList__header}>
                <div className={style.c_taskList__taskCreated}>
                    <span className={style.tarefasCriadas}>Tarefas Criadas</span>
                    <span className={style.c_taskList__info}>{tasks.length}</span>
                </div>
                <div className={style.c_taskList__taskCompleted}>
                    <span className={style.tarefasConcluidas}>Concluidas</span>
                    <span className={style.c_taskList__info}>{finishedTotal} de {tasks.length}</span>
                </div>
            </div>
        </>
    );
}