import { useState } from "react"


const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [date,setDate] = useState('')
    const [reminder,setReminder] = useState(false)

    //onSubmit
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add task!')
            return
        }
        onAdd({text,date,reminder})

        setText('')
        setDate('')
        setReminder(false)
        return 
    }

    return (
        <form style = {add_form} onSubmit = {onSubmit}>
            <div style = {form_controll} >
                <label>Task</label>
                <input type='text' placeholder= 'Task' value = {text} onChange = {(e) => {setText(e.target.value)}}/>
            </div>
            <div style = {form_controll}>
                <label>Day & time</label>
                <input type='text' placeholder= 'Day & time'value = {date} onChange = {(e) => {setDate(e.target.value)}}/>
            </div>
            <div style = {form_controll}>
                <label>Reminder</label>
                <input type='checkbox'value = {reminder} onChange = {(e) => {setReminder(e.target.checked)}}/>
            </div>

            <input type='submit' value = 'Add task'/>
        </form>
    )
}

export default AddTask

const add_form = {

}

const form_controll = {

}