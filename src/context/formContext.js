import { createContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [number, setNumber] = useState(0);
    const [useHtml, setUseHtml] = useState('No');
    // const [paragraphs, setParagraphs] = useState([]);paragraphs, setParagraphs, 
    const values = { number, setNumber, useHtml, setUseHtml };
    return (
        <FormContext.Provider value={values}>{children}</FormContext.Provider>
    );
}

export default FormContext;

