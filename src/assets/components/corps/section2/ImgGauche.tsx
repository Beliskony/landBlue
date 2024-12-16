interface ImgGaucheProps{
  ImgGau:string;
  altIm?:string;
  titre?:string;
}

const ImgGauche:React.FC<ImgGaucheProps> =({ImgGau, altIm, titre})=>{
    return(
        <div className="flex flex-col h-full w-full justify-center items-center overflow-hidden space-y-4">
             <img src={ImgGau}
                  alt={altIm}
                  className="h-[420px] w-full object-cover rounded-2xl max-sm:h-[150px] max-sm:w-[250px]"/>
           <div>       
             <h2 className="text-xl text-black font-medium max-sm:text-xl">{titre}</h2>
           </div>
        </div>
    );
};

export default ImgGauche;