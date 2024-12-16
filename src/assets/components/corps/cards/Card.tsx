interface cardProps{
    imgCard: string;
    dateDES?: string;
    descrip: string;
    infos: string;
    auteur?: string;
}

const Card: React.FC<cardProps> =({imgCard, dateDES, descrip, infos, auteur})=>{
    return(
        <div className="flex flex-col h-52 w-64 bg-[#292a2d] max-sm:h-36 max-sm:w-48">
            {/*premiere ligne*/}
            <div className="flex flex-row justify-between m-2 ">
                <div className="bg-fuchsia-800 h-7 w-7 justify-center items-center flex max-sm:h-4 max-sm:w-4 ">
                  <img src={imgCard} 
                       className="h-4 w-4 items-center justify-center"/>
                </div>
                <div>
                    <p className="text-white font-light text-xs">{dateDES}</p>
                </div>
            </div>

            {/*second*/}
            <div className="flex-col space-y-2 w-32 m-2 ">
                 <p className="text-sm font-light text-white">{descrip}</p>
                 <h3 className="text-base text-wrap text-white">{infos}</h3>
            </div>

            {/*troisieme*/}
            <div className="mx-2 my-6 max-sm:hidden">
                <p className="text-white font-thin">{auteur}</p>
            </div>

        </div>
    )
}

export default Card;