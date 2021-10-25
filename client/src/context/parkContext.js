import React, { createContext, useContext, useEffect, useState } from "react";

const ParkContext = createContext();

export default function ParkProvider(props) {
  const [park, setPark] = useState([]);

  const addToPark = child => {
    if (park.includes(child)) {
      return false;
    }
    setPark([...park, child]);
    return true;
  };

  useEffect(() => {
    console.log(park);
  }, [park]);

  return (
    <ParkContext.Provider value={{ park, addToPark }}>
      {props.children}
    </ParkContext.Provider>
  );
}

export function usePark() {
  const context = useContext(ParkContext);

  if (context === undefined) {
    throw new Error("usePark must be used within a ParkProvider");
  }
  const { park, addToPark } = context;
  return { park, addToPark };
}