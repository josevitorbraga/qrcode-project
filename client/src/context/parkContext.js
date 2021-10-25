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

  const getChildById = id => {
    const child = park.find(child => child._id === id);
    return child;
  };

  useEffect(() => {
    localStorage.setItem("park", JSON.stringify(park));
  }, [park]);

  useEffect(() => {
    if (!localStorage.getItem("park")) {
      localStorage.setItem("park", JSON.stringify(park));
    } else {
      setPark(JSON.parse(localStorage.getItem("park")));
    }
  }, []);

  return (
    <ParkContext.Provider value={{ park, addToPark, getChildById }}>
      {props.children}
    </ParkContext.Provider>
  );
}

export function usePark() {
  const context = useContext(ParkContext);

  if (context === undefined) {
    throw new Error("usePark must be used within a ParkProvider");
  }
  const { park, addToPark, getChildById } = context;
  return { park, addToPark, getChildById };
}
