import React from 'react'

export const ButtonFill = (props) => {
    return (
        <button className={props.customClass} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 0,
            height: 40,
            padding: 20,
            borderRadius: 25,
            backgroundColor: '#0070B6',
            borderWidth: 2,
            borderColor: '#0070B6',
            borderStyle: 'solid',
            color: '#fff',
            fontWeight: 'bold',
            minWidth: 200,
        }}>{props.title}</button>
    )
}
