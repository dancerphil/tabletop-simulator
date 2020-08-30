import {createRegion} from 'region-core';

const knightPositionRegion = createRegion<[number, number]>([1, 7])

export const useKnightPosition = knightPositionRegion.useValue;

export function canMoveKnight(toX: number, toY: number) {
    const [x, y] = knightPositionRegion.getValue();
    const dx = toX - x
    const dy = toY - y
    return (
        (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    )
}

export const setKnightPosition = knightPositionRegion.set;
