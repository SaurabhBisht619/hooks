import React, { useContext } from "react";
import { UserContext } from "./Abcdd";

function Data3() {
  const data = useContext(UserContext);
  return (
    <div>
      <h1>Hello {data}</h1>
    </div>
  );
}

export default Data3;
