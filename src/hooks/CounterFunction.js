import React, { useState } from 'react';
import CounterTemplate from '../components/templates/CounterTemplate';
// estado em função (hook)
function CounterFunction() {    
    
    const [counter, setCounter] = useState(0);
    
    return (
        <CounterTemplate
            counter={counter}
            increment={() => setCounter(counter + 1)}
            decrement={() => setCounter(counter - 1)}
         />
        )
    };


export default CounterFunction;