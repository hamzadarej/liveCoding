import React from "react";
import Data from "../data.json"

const DataContext= React.createContext(Data);
export {Data,DataContext};