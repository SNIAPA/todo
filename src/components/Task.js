import { FaTimes } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa'
import { merge } from 'lodash';

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div style = {task.reminder ? taskStyleReminder:taskStyle} key = {task.id} onDoubleClick = {() => {onToggle(task.id)}}>
            <h3 style = {textStyle}>{task.text} <FaTimes onClick = {() => onDelete(task.id)} style = {{color: 'red',cursor: 'pointer',float:'right'}}/></h3>
            <h4 style = {dateStyle}>{task.date} </h4>
        </div>
    )
}

const taskStyle = {
    display : 'flex',
    flexDirection: 'column',
    margin: 'auto auto 1em auto',
    backgroundColor: '#4C527011', 
    width: '100%',   
    float: 'left',
    padding: '10px',
    borderRadius: '5px',
    borderLeft: '5px solid red'
}

const taskStyleReminder = {
    display : 'flex',
    flexDirection: 'column',
    margin: 'auto auto 1em auto',
    backgroundColor: '#4C527011', 
    width: '100%',   
    float: 'left',
    padding: '10px',
    borderRadius: '5px',
    borderLeft: '5px solid #090'
}

const textStyle = {
    marginBlockStart: '0em',
    marginBlockEnd: '0em',
}

const dateStyle = {
    marginBlockStart: '0em',
    marginBlockEnd: '0em',
}

export default Task
