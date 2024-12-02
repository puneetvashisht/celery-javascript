import { useState } from "react";

function Badge (prop){

    // let count = 34;
    const [count, setCount] = useState(0);
    
    function handleClick(){
        console.log("Button clicked!");
        // prop.caption = "ABC"
        setCount(count + 1);
        // count++;
        console.log(count);
        
    }
    
    // console.log('Rendering UI .... ')
    return (
        <button onClick={handleClick} type="button" className="btn btn-primary">
            {prop.caption} <span className="badge text-bg-secondary">{count}</span>
        </button>
    )
}

export default Badge;