import { useMemo, useState } from "react"

const DemoUseMemo = () => {

    const [count, setCount] = useState(10);
    const expenses = useMemo(() => 
        count**2,[count]) // recompute when count changes.
    return (
        <>
        <h1>UseMemo Example</h1>
        <p>UseMemo hook is used for optimise computational cost and improve performance.</p>
        <h5>Simple calculated value  : {expenses}</h5>
        </>
    )
}

export default DemoUseMemo;
