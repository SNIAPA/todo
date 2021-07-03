import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'


function App() {

  const [tasks,setTasks] = useState([
    {
        id: 1,
        text: "123",
        date: 'Feb 2th at 2:30pm',
        reminder: false,
    },
    {
        id: 2,
        text: "1235",
        date: 'Feb 2th at 2:30pm',
        reminder: false,
    },
    {
        id: 3,
        text: "1232",
        date: 'Feb 2th at 2:30pm',
        reminder: false,
    },
])

  //show add menu
  const [showAdd, setShowAdd] = useState(false)

  //toggle showAdd
  const toggleShowAdd = () => {
    setShowAdd(!showAdd)
  }

  //remove task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => { return task.id !== id}))
  }
  //create task
  const createTask = (task) =>{
    const id = Math.floor(Math.randeom * 100000000)+1
    const newTask = {id, ...task}
    console.log(newTask)
    setTasks([...tasks,newTask])
  }
  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => {return task.id === id ? {...task ,reminder: !task.reminder}:task}))
    }

  return (
    <div style={mainBoxStyle}>
      <Header toggleShowAdd = {toggleShowAdd}></Header>
      {showAdd && <AddTask onAdd = {createTask}></AddTask>}
      <Tasks
        tasks = {tasks}
        onDelete = {deleteTask}
        onToggle = {toggleReminder}
      ></Tasks>
    </div>
  )
}

const mainBoxStyle = {
  fontFamily: "consolas",
  color: '#4C5270',
  width: '400px',
  minHeight:' 300px',
  //border : 'solid #36EEE0 2px',
  overflow: 'auto',
  margin: '10% auto auto auto',
  borderRadius: '30px',
  padding: '50px',
  paddingTop:'20px', 
  backgroundColor: '#BCECE0',
  boxShadow: '7px 7px 10px #44444433',
}

export default App;
