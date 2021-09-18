import React from 'react'
import { useSelector } from 'react-redux'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = () => {
    const tasks = useSelector(state => state.todoReducer.tasks)
    return (
        <div>
            {
                tasks.map(task => <TaskItem task={task} key={task.id}/>)
            }
        </div>
    )
}

export default TaskList
