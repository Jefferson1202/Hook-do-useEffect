import React, { useState } from 'react';
import EffectExample from './EffectExample';

function App() {
   const [visible, setvisible] = useState(true);
   
  setTimeout(() => {
    setvisible(false);
  }, 5000);

    return visible && <EffectExample />;
}



export default App;