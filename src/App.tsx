import React from 'react';
import Button from './components/Test';

const App = () => {
    return (
        <div>
            <Button onClick={()=>console.log(true)} text={'click me'}/>
        </div>
    )
}

export default App;