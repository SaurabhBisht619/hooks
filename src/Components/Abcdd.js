import React, { createContext } from 'react'
import Data3 from './Data3';



const UserContext = createContext();

function Abcdd() {
  return (
    <UserContext.Provider value={"Saurabh"}>
        <Data3/>
    </UserContext.Provider>
  )
}

export default Abcdd;
export {UserContext};
