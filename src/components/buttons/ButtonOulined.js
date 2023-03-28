import React from 'react'

export const ButtonOulined = (props) => {
    return (
        <button style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 0,
            height: 40,
            padding: 20,
            borderRadius: 25,
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: '#00BBDD',
            borderStyle: 'solid',
            color: '#0070B6',
            fontWeight: 'bold',
            minWidth: 200,
        }}>{props.title}</button>
    )
}
