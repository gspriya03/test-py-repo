// /React hook = Special function that allows functional components
//               to use React features without writing class components (React v16.8)
//               (useState, useEffect, useContext, useReducer, useCallback, and more
//useState() =   A React hook that allows the creation of a stateful variable AND a setter function to update its value in the Virtual DOM.
//               [name, setName]

import React, {useState} from 'react'
function Counter() {
    const [count,setCount] = useState(0);
    const CountIncrement = () => {
        setCount(count + 1);
    }
    const CountDecrement = () => {
        setCount(count-1);
    }
    const reset = () => {
        setCount(0);
    }
    return(
        <div className = "counter-containner">
            <p className = "count-display"> {count}</p>
            <button className = "counter-button" onClick ={CountIncrement}>Increment</button>
            <button className = "counter-button" onClick ={CountDecrement}>Decrement</button>
            <button className = "counter-button" onClick ={reset}>ResetCount</button>
        </div>
    );
}
export default Counter