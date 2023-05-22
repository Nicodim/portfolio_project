import React, {useState} from 'react';
import classes from './Counter.module.scss'
export const Counter = () => {
    const [count, setCount] = useState(0)

    const incriment = () => {
        setCount(state => state + 1)
    }
    return (
        <div className={classes.button}>
            <h1>{count}</h1>
            <button onClick={incriment}>increment</button>
        </div>
    );
};

