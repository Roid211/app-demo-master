import Layout from "@/components/Layout";
import Button from "@/components/Button";
import {useContext} from "react";
import AppContext from "@/context";
import Link from 'next/link';

export default function Playground() {
    const { modalOpen, updateModalOpen } = useContext(AppContext);
    const goBack = () => {
        window.history.back();
      };

return(
    <Layout>
    <div className="flex py-[24px] flex-col items-center" >
        <div className="gap-[24px]  justify-center items-center flex flex-col" >
            <h1>The Best h1</h1>
            <Button onPress={() => {updateModalOpen(true)}} disabled={false} variant="secondary" label="Open Modal" />
            <Button onPress={goBack} disabled={false} variant="primary" label="Go back"/>        </div>
    </div>
    </Layout>
);
};