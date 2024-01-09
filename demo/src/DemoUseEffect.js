import React ,{useEffect, useState} from 'react';

//https://dev.to/musique243/most-commonly-used-react-hooks-587j - For Reference
const DemoUseEffect = ()=>{
    const[state, setState] = useState(false);

    //This will run when the component mounts and anytime the statefull data changes.
    useEffect(() => {
        console.log("Default Effect!!");
    })

    //This will run when the component is first initialized
    useEffect( ()=> {
        console.log("Initial Effect");
    },[])

    //This will run when the component state variable value get changed.
    useEffect(() => {
        console.log("State Change Effect");
    },[state]);

    //This will run when the component mount (Start) and unmount (End) also used for clean up.
    useEffect( () => {
        console.log("Start");

        return () => console.log("End!")
    })

    return(
        <>
        <h1>UseEffect Example</h1>
        <button onClick={() => setState(!state)}>Click</button>
        </>
    )

}

export default DemoUseEffect;