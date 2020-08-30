// @ts-nocheck
import React from 'react'
import { useDrop } from 'react-dnd'
import { canMoveKnight, moveKnight } from '../regions'
import { ItemTypes } from './ItemTypes'

const Overlay = ({ color }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                zIndex: 1,
                opacity: 0.5,
                backgroundColor: color,
            }}
        />
    )
}

export const BoardSquare = ({ x, y, children }) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        canDrop: () => canMoveKnight(x, y),
        drop: () => moveKnight(x, y),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    })

    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '12.5%',
                height: '12.5%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {children}
            {isOver && !canDrop && <Overlay color="red" />}
            {!isOver && canDrop && <Overlay color="yellow" />}
            {isOver && canDrop && <Overlay color="green" />}
        </div>
    )
}
