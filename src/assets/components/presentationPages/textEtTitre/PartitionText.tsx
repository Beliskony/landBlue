interface PartitionTextProps{
    texteUni:string;
}


const PartitionText: React.FC<PartitionTextProps> = ({texteUni}) => {
    return (
        <div className="flex flex-row space-x-6 px-24">
            <div className="h-14 w-14 flex flex-row">
              <img src="/src/assets/images/iconscomma.png" className="h-7 w-7"/>
              <img src="/src/assets/images/iconscomma.png" className="h-7 w-7"/>
            </div>
            
            <div className="w-full ">
               <p className="text-white font-medium text-xl text-wrap text-center">{texteUni}</p>
            </div>

            <div className="h-14 w-14 flex flex-row">
              <img src="https://img.icons8.com/?size=100&id=79004&format=png&color=F5CB5C" className="h-7 w-7"/>
              <img src="https://img.icons8.com/?size=100&id=79004&format=png&color=F5CB5C" className="h-7 w-7"/>
            </div>
            


        </div>
    );
}


export default PartitionText;
