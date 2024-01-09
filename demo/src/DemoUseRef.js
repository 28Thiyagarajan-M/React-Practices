
import React, { useRef, useState } from 'react';

 const DemoUseRef = () => {
    const name = useRef();
    const [isDisplay, setIsDisplay] = useState(false);
    
    return(
        <>
        <h1>Simple Form</h1>
        <label>Name :</label>
        <input type='text' ref = {name}></input>
        <button onClick={()=> setIsDisplay(!isDisplay)}>Click Here!</button>
        {isDisplay && <h2>Hi! {name.current.value}, Welcome to our website.</h2>}
        </>
    )
}

export default DemoUseRef;