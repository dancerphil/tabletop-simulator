import {io} from "./io";

export function moveKnight(toX: number, toY: number) {
    io.emit('move', [toX, toY])
}
