import {useState} from "react";
import Timer from "./component/Timer.js";

function App2(){
    const [showTimer, setShowTimer] = useState(false);
    return (
        <div>
            {showTimer && <Timer />}
            <button onClick={()=>setShowTimer(!showTimer)}></button>
        </div>
    );
};

export default App2;