import React, { useState } from 'react';

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};
const buttonStyle ={
    backgroundColor: 'red',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%',
    height: '100%',
    color: 'white',
    fontSize: 50
}

export default function Square({onClick, value}){
    return (
        <div style ={style} ><button style = {buttonStyle} onClick = {onClick} >
            {value}
            </button></div>
    )
}