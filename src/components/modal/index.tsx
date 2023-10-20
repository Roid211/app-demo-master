import Button from "../Button";

type ModalProps = {
    onPress: () => void;
}

const Modal = ({ onPress }: ModalProps) => {
    return( 
    <div className="items-center justify-center flex h-screen w-screen bg-black/30 fixed z-10 backdrop-blur-md">
        <div className="rounded-md px-[48px] py-[32px] text-left  flex flex-col gap-[24px] min-w-[320px] max-w-[360px] min-h-[240px] bg-gray-200 ">
        <h1 className=" text-2xl font-bold">
           Este es el titulo del Modal
        </h1>
        <p className=" font-bold">
            esta es la descripcion del modal, palabras para rellenar etc , y palabras para alcanzar las 4 columnas        </p>
        <div>
        <Button onPress={onPress} disabled={false} variant="primary" label="confirmar" />
        </div>
    </div>
    </div>
    )
};
export default Modal;