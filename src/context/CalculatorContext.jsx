import { createContext, useState } from "react";



export const CalcContext = createContext(null);


export const CalcProvider = ({ children }) => {
    const [operations, setOperations] = useState([]);
    const [values, setValues] = useState([]);

    return (
        <CalcContext.Provider value={
            [operations, setOperations, values, setValues]
        }>
            {children}
        </CalcContext.Provider>
    )

}