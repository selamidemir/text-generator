import { createContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({children}) => {
    const [paragrafs, setParagrafs] = useState(1);
    const [useHtml, setUseHtml] = useState('No');
    const values = { paragrafs, setParagrafs, useHtml, setUseHtml};
    return (
        <FormContext.Provider value={values}>{children}</FormContext.Provider>
    );
}

export default FormContext;

