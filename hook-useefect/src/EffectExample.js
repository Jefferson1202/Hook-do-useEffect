import React, { useEffect, useState } from 'react';

export default function EffectExample() {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = counter;
        
        return () => document.title = 'React app';
    }, [counter]);
    
    return (

        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Adicionar</button>
        </div>
    );
}