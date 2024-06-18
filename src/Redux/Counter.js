import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementAsync, incrementByAmount, selectCount } from './CounterSlice';

function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(2);

    return (
        <div>
            <p style={{ margin: '20px' }}>
                <span> Clicked: {count} times </span>
                <button style={{ margin: '5px' }} onClick={() => dispatch(increment())}> + </button>
                <button style={{ margin: '5px' }} onClick={() => dispatch(decrement())}> - </button>
            </p>
            <p style={{ margin: '20px' }}>
                <input style={{ margin: '5px', width: '40px' }} type='number' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

                <button style={{ margin: '5px' }}
                    onClick={() => dispatch(incrementByAmount(Number(inputValue)))}
                > Increment if odd </button>

                <button style={{ margin: '5px' }}
                    onClick={() => dispatch(incrementAsync(Number(inputValue)))}> Increment async </button>
            </p>
        </div>
    )
}

export default Counter;