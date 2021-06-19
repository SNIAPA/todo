import Header from './components/Header'
import Tasks from './components/Tasks'
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

  return (
    <div style={mainBoxStyle}>
      <Header ></Header>
      <Tasks tasks = {tasks}></Tasks>
    </div>
  )
}

const mainBoxStyle = {
  fontFamily: "consolas",
  color: '#4C5270',
  width: '400px',
  height: '300px',
  //border : 'solid #36EEE0 2px',
  margin: '10% auto auto auto',
  borderRadius: '30px',
  padding: '50px',
  paddingTop:'20px', 
  backgroundColor: '#BCECE0',
  boxShadow: '7px 7px 10px #44444433',
}

export default App;
