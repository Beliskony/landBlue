interface TitreSectionProps{
    titre:string;
    descrip:string;
}

const TitreSection: React.FC<TitreSectionProps> = ({ titre, descrip }) => {
    return (
        <div className="flex flex-col space-y-5 py-3 items-center">
            <h3 className="text-4xl text-[#F5CB5C] font-semibold">{titre}</h3>
            <p className="text-xs text-white text-wrap">{descrip}</p>
        </div>
    );
}


export default TitreSection;
