import React, { createContext, useContext } from "react";


const ans  = {
    right: "✅",
    wrong: "❌"
}


const AnsContext = createContext(ans);


const DemoUseContext = () =>{

    return(
        <AnsContext.Provider value={ans.wrong}>
            <RightAns />
        </AnsContext.Provider>
    )

}

const RightAns = () =>{
    const ans = useContext(AnsContext);
    console.log(AnsContext.Consumer);
    return(
        <>
        <h1>UseContext Example </h1><br/>
        <p>"{ans}" from the useContext hook.</p>
        </>
    )
}

export default DemoUseContext;