/**
 * @file websocket 实例
 */
import socketIO from 'socket.io-client';
import {setKnightPosition} from './knightPosition';

export const io = socketIO('http://localhost:3002');

io.emit('join', '1234')

io.on('move', (v: any) => {
    setKnightPosition(v)
})
