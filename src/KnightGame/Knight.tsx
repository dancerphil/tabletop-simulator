// @ts-nocheck
import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'

const knightStyle = {
    height: '100%',
    width: '70%',
    cursor: 'move',
    border: '1px solid gray',
    borderRadius: 4
}

const knightImageStyle = {
    height: '70%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    borderBottom: '1px solid gray',
    fontSize: 30
}
const Card = ({card}) => {
    const [{ isDragging }, drag] = useDrag({
        item: card,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    })
    return (
        <div
            ref={drag}
            style={{
                ...knightStyle,
                opacity: isDragging ? 0.5 : 1,
            }}
        >
            <div style={knightImageStyle}>{card.image}</div>
            <div>{card.title}</div>
        </div>
    )
}

export const Knight = () => {
    const card = {
        type: ItemTypes.KNIGHT,
        image: '♘',
        title: 'knight'
    }
    return <Card card={card}/>
}

