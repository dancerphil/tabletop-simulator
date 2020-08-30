// @ts-nocheck
import React from 'react'
import { BoardSquare } from './BoardSquare'
import { Knight } from './Knight'
import {useKnightPosition} from "../regions";
/** Styling properties applied to the board element */
const boardStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
}

export const Board = () => {
    const [knightX, knightY] = useKnightPosition();
    const renderSquare = (i) => {
        const x = i % 8
        const y = Math.floor(i / 8)
        const isKnightHere = x === knightX && y === knightY
        return (
            <BoardSquare key={i} x={x} y={y}>
                {isKnightHere ? <Knight /> : null}
            </BoardSquare>
        )
    }
    const squares = Array.from({length: 64}).map((_, i) => renderSquare(i))
    return <div style={boardStyle}>{squares}</div>
}
