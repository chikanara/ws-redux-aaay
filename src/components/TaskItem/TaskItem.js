import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTask } from '../../js/action/todoAction'
import EditTask from '../EditTask/EditTask'

const TaskItem = ({task}) => {
    const dispatch = useDispatch()
    return (
        <div className="task">
            <p className={task.isDone ? "done" : "" }>{task.todo}</p>
            <div>
                <button onClick={() => dispatch(completeTask(task.id))}>complete</button>
                <EditTask task={task}/>
                <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
            </div>
        </div>
    )
}

export default TaskItem
