// LIBS
import { createContext, useState, Children } from "react";

type AppContextType = {
    modalOpen: boolean;
    updateModalOpen: (value: boolean) => void;
}

const AppContext = createContext<AppContextType>({} as AppContextType); 

type AppProviderType = {
    children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderType) => {
    const [modalOpen, setModalOpen] = useState(false);

    const updateModalOpen = (value:boolean) => {
        setModalOpen(value);
    }
        
    return (
    <AppContext.Provider value={{modalOpen, updateModalOpen}}>{children}</AppContext.Provider>
    );

};

export default AppContext;