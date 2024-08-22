import { createContext, FC, useState } from "react";
import { ContextProps, ContextProviderProps } from "../types";

const GeneralContext = createContext<ContextProps | null>(null);

const ContextProvider: FC<ContextProviderProps> = ({children}) => {
    const [state, setState] = useState<ContextProps | null>({test: "test"});

    return (
        <GeneralContext.Provider value={state}>
            {children}
        </GeneralContext.Provider>
    )
}

export {GeneralContext, ContextProvider};