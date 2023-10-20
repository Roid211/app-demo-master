import {useContext} from "react";
import Modal from "../modal";
import AppContext from "@/context";

type AppWhrapperProps ={
    children: React.ReactNode;
};

 const AppWhrapper = ({children}: AppWhrapperProps) => {
    const { modalOpen, updateModalOpen } = useContext(AppContext);
    return (
    <div className="flex min-h-screen flex-col items-center justify-center">
        {modalOpen && <Modal onPress={() => updateModalOpen(false)}/>}
        {children}
    </div>
    );
}
export default AppWhrapper;