import { useReducer } from "react";

const reducer = (state, action) => {
    console.log(state);

    switch (action.operation) {
        case "Increment":
            return state + 1 
        case "Decrement":
            return state - 1 
        default:
            throw new Error();
    }
}

// let initialState = 0;

// let count = 0;

const DemoUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, 0);
    console.log(state);
    return (
        <>
            <h1>UseReducer Example - Simple Counter</h1><br />
            <h2>Counter : {state}</h2>
            <button onClick={() => dispatch({ operation: "Increment" })}>Increment</button><br />
            <button onClick={() => dispatch({ operation: "Decrement" })}>Decrement</button><br />
            <button onClick={() => dispatch({ operation: "Default" })}>Default</button><br />
        </>
    )

}

export default DemoUseReducer;
