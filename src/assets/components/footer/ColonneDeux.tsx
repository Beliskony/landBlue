interface ColonneDeuxProps{
    titre: string;
    optionUn:string;
    optionDeux:string;
    optionTrois?:string;
    optionQuatro?:string;
    optionCinq?:string;
}

const ColonneDeux: React.FC<ColonneDeuxProps> = ({titre, optionUn, optionDeux, optionTrois, optionQuatro, optionCinq}) => {
    return (
        <div className="flex flex-col w-40">
            <h2 className="text-xl font-bold underline">{titre}</h2>
            {/*les liens*/}
             <ul>
                <li><a href="#" className="text-xs text-gray-700 font-medium">{optionUn}</a></li>
                <li><a href="#" className="text-xs text-gray-700 font-medium">{optionDeux}</a></li>
                <li><a href="#" className="text-xs text-gray-700 font-medium">{optionTrois}</a></li>
                <li><a href="#" className="text-xs text-gray-700 font-medium">{optionQuatro}</a></li>
                <li><a href="#" className="text-xs text-gray-700 font-medium">{optionCinq}</a></li>
             </ul>

        </div>
    );
}


export default ColonneDeux;
