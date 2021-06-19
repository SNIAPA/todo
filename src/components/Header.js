import React from 'react'
import PropTypes from 'prop-types'
import Btn from './Btn'


const Header = ({title}) => {

    const onClick = () => {

    }

    return (
        <header >
            <div style = {TopStyle}>
                <h1>Task Tracker</h1>
                <Btn label = 'Add' onClick = {onClick}></Btn>
            </div>
        </header>
    )
}



Header.propTypes = {
    title: PropTypes.number
}



const TopStyle = {
    display : 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

}


export default Header
