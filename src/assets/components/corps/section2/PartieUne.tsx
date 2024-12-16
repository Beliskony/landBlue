const PartieUne =()=>{
    return(
      <div className="flex flex-row w-full h-96 justify-between px-4 my-4 max-sm:h-6">

        <div className="w-2/4 max-sm:w-full">
           <h2 className="text-5xl font-extrabold text-wrap max-sm:text-3xl max-sm:text-center">Touvez vos inspiration default</h2>
        </div>
       
       <div className="w-2/4 flex flex-col items-center max-sm:hidden">
           <p className="w-full p-3 text-sm text-black font-medium">
           Lorem ipsum dolor sit amet. Eos vitae nemoEa labore quo molestias delectus eos optio magni sed dicta harum.
            Aut commodi consequatur vel enim tempore Ut sunt 33 quisquam inventore id quae voluptas et dolorem totam et 
            totam excepturi.
           </p>

           <button className="h-10 w-32 text-xl font-semibold text-black border-2 text-center rounded-2xl shadow-xl">
               Visiter
           </button>
       </div>

      </div>
    );
};

export default PartieUne;