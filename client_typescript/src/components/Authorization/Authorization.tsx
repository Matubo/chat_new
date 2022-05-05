import React, {FC,useState} from 'react';

type AuthorizationWindowParamTypes={
    callback:Function
}

const AuthorizationWindow = ({callback}:AuthorizationWindowParamTypes) => {
    const [user, setUser]=useState('');

    const clickHandler=()=>{
        if(user.length>3){
        callback(user);
        }
    };

    const changeInputHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setUser(e.target.value)
    }

    return (
        <div className='authorization'>
            <input type="text" className='authorization__input' value={user} onChange={changeInputHandler}/>
            <button onClick={clickHandler}>Вход</button>
            не автоизован
        </div>
    );
};

export default AuthorizationWindow;