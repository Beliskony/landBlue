interface CardDeSixprops {
    imgSix:string;
    titreCard:string;
    descriptionSix:string;
}

const CardDeSix: React.FC<CardDeSixprops> = ({imgSix, titreCard, descriptionSix}) => {
    return (
        <div className=" flex flex-col "><a href="#">

            <div className="flex flex-row w-full space-x-3 px-3">
                <img src={imgSix} alt="image" className="h-9 w-9"/>
                <h4 className="text-xl font-medium text-wrap">{titreCard}</h4>
            </div>

            <div className="w-full text-wrap text-xs px-3">
                <p>{descriptionSix}</p>
            </div></a>

        </div>
    );
}


export default CardDeSix;
