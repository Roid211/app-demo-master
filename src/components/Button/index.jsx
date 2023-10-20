

const Button = ({label, variant, onPress, disabled}) => {
    return (
        <>
        {variant === "primary" &&(
            <button onClick={onPress} disabled={disabled} type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-red-100 border border-red-500 font-semibold text-red-500 hover:bg-red-500 active:bg-red-800 active:border-red-900 hover:text-white focus:outline-none  transition-all text-sm ">
            
            {label} 
            </button>
        )}
         {variant === "secondary" &&(
            <button onClick={onPress} disabled={disabled} class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-green-100 border border-green-500 font-semibold text-green-500 hover:bg-green-500 active:bg-green-800 active:border-green-900 hover:text-white focus:outline-none  transition-all text-sm "
            >
                {label}</button>
        )}
        
        </>
    )

}

export default Button;
