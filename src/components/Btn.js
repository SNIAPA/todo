import React from 'react'

const Btn = ({label,onClick}) => {
    return (
        <button style = {btnStyle} onClick = {onClick}>
            {label}
        </button>
    )
}

export default Btn

const btnStyle = {
    backgroundColor: '#F652A0dd',
    borderColor: '#F652A000',
    color: '#ECE2E0',
    height: '40px',
    width: '70px',
    fontSize: '20px',
    borderRadius: '5px',
    boxShadow: '7px 7px 10px #F652A022',
    float : 'left'
}