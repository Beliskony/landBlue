interface ImgDroiteProps{
  imgD:string;
  altImg?:string;
  titre?:string;
}

const ImgDroite:React.FC<ImgDroiteProps> =({imgD, altImg, titre})=>{
    return(
        <div className="flex flex-col h-full w-full overflow-hidden space-y-4 max-sm:items-center">
             <img src={imgD}
                  alt={altImg}
                  className="h-[200px] w-full object-cover rounded-2xl max-sm:w-[250px]"/>
           <div>       
             <h2 className="text-xl text-black font-medium text-center">{titre}</h2>
           </div>
        </div>
    );
};

export default ImgDroite;