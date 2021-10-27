import React, { createContext, useContext, useEffect, useState } from "react";

const ParkContext = createContext();

export default function ParkProvider(props) {
  const [park, setPark] = useState([]);

  const addToPark = child => {
    const childId = child._id;

    if (park.length === 0) {
      setPark([...park, child]);
      return true;
    }

    for (let i in park) {
      if (park[i]._id === childId) {
        return false;
      }
      setPark([...park, child]);
      return true;
    }
  };

  const getChildById = id => {
    const child = park.find(child => child._id === id);
    if (!child) {
      return false;
    }
    return child;
  };

  useEffect(() => {
    const park = JSON.parse(localStorage.getItem("park"));
    if (park) {
      setPark(park);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("park", JSON.stringify(park));
  }, [park]);

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
