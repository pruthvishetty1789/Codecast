import {io} from 'socket.io-client';

export const initSocket=async()=>{
    const option={
        'force new connection':true,
        recconnectionAttempt:'infinity',
        timout:1000,
        transports:['websocket'],
    };
    return io(process.env.REACT_APP_BACKEND_URL, option);
};