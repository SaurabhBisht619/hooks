import React from "react";
import Data3 from "./Components/Data3";
import Abcdd from './Components/Abcdd';

function App() {
  return (
    <div>
   <Abcdd/>
      <Data3/>
    </div>
  );
}

export default App;

// import React, { useReducer } from 'react';

// function App() {

//   const reducer = (state,action)=>{
//     if(action.type==="Increment"){
//       return state+1;
//     }else if(action.type==="Decrement"){
//       return state-1;
//     }
//     return state;
//   }

//   const [state,dispatch] = useReducer(reducer,0);

//   return (
//     <div>
//       <button onClick={()=>dispatch({type:"Increment"})}>+</button>
//       <span>{state}</span>
//       <button onClick={()=>dispatch({type:"Decrement"})}>-</button>
//     </div>
//   );
// }

// export default App;
