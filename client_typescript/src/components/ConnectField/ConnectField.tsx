import React, { useState } from 'react';

type ConnectFieldPropTypes={
    callback:Function
}

const ConnectField = ({callback}:ConnectFieldPropTypes) => {
    const [room,setRoom]=useState('');
    const chagneInputHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setRoom(e.target.value);
    }
    const clickHandler = ()=>{
        callback(room)
    }
    return (
        <div>
            <input type="number" name="" value={room} onChange={chagneInputHandler}/>
            <button onClick={clickHandler}></button>
        </div>
    );
};

export default ConnectField;