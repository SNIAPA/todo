

const Tasks = ({tasks}) => {
    return (
        <>            
            {tasks.map((tsak) => (
                <div style = {taskStyle}key = {tasks.id} >
                    <h3 style = {textStyle}>{tsak.text}</h3>
                    <h4 style = {dateStyle}>{tsak.date}</h4>
                </div>
                )

              )
            }  
        </>
    )
}

const taskStyle = {
    display : 'flex',
    flexDirection: 'column',
    padding: '0px',
    margin: 'auto auto 1em auto',
    backgroundColor: '#4C527055', 
    width: '60%',   
    float: 'left',
    padding: '10px',
    borderRadius: '5px',
}

const textStyle = {
    marginBlockStart: '0em',
    marginBlockEnd: '0em',
}

const dateStyle = {
    marginBlockStart: '0em',
    marginBlockEnd: '0em',
}

export default Tasks
