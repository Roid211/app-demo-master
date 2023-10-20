import Button from "../Button";
import { useState, useEffect } from "react";
export function Products ({pokemon}) {
    const [cardData, setCardData] = useState([pokemon[0]]);
    const [cartCount, setCartCount] = useState(1);  

    const removeCard = (id) => {
        // Encuentra la tarjeta a eliminar por su id
        const removedCard = cardData.find((card) => card.id === id);
    
        if (removedCard) {
          // Elimina la tarjeta del arreglo de cartas
          const updatedCardData = cardData.filter((card) => card.id !== id);
          setCardData(updatedCardData);
        }
      };
    
    const addRandomCard = () => {
        // Genera un índice aleatorio para el nuevo Pokémon
        const randomIndex = Math.floor(Math.random() * pokemon.length);
    
        // Verifica si el Pokémon ya está en la lista
        const newCard = pokemon[randomIndex];
        if (!cardData.find((card) => card.id === newCard.id)) {
          // Si no está duplicado, agrégalo a la lista
          setCardData([...cardData, newCard]);
        }
      };
   
    useEffect(() => {
        setCartCount(cardData.length);
      }, [cardData]);                                                           
    
    return(
        <div className=" items-center justify-center p-[48px] bg-gray-300 flex flex-col gap-[24px]" >
            <div className=" grid grid-cols-3 gap-[12px] items-star max-h-fit" >
                {cardData.map((pokemon, index) =>(
                   <li className=" p-[24px] rounded-lg flex bg-[#2f2f2f]  flex-col items-center justify-star" 
                    id={index}
                   key={"pokemon-" + index}>
                    <div className="bg-[#272626] rounded-lg py-[24px] flex flex-col gap-[24px] items-center  w-full ">
                    <div className="" style={{
                            backgroundImage: `url(${pokemon.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "240px",
                            height: "200px",
                        }}/>
                        <strong className=" text-white">{pokemon.name}</strong> 
                    </div>
                    <div className="">
                        <h1 className="text-gray-200 p-[12px]">{pokemon.description}</h1>
                    </div>
                    <div className="w-full pt-[24px] h-full justify-center flex">
                        <div className=" flex items-end justify-center  ">
                        <Button
                            disabled={false}
                            variant="primary"
                            label="DELETE"
                            onPress={() => {
                                removeCard(pokemon.id);
                            }}
                            >
                            </Button>
                    </div>
                    </div>
                   </li> 
                ))}
            </div>

            <div className="pt-[24px] w-full flex flex-col items-center gap-[24px] justify-between">
                <div>
                <p>{cartCount}</p></div>
                <Button
                onPress={addRandomCard}
                disabled={false}
                variant="secondary"
                label="Agregar al Carrito"
                />
            </div>

        </div>
    );
};