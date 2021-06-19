import React from 'react'

const List = () => {
    return (
        <div style = {listStyle}>
            <a>123</a>
            <a>1234</a>
        </div>
    )
}


const listStyle = {
    display: 'flex',
    flexDirection: 'column',
}
export default List
