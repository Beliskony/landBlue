
import Card from "../assets/components/corps/cards/Card";
import ImgDroite from "../assets/components/corps/section2/ImgDroite";
import ImgGauche from "../assets/components/corps/section2/ImgGauche";
import PartieUne from "../assets/components/corps/section2/PartieUne";
import Sectionner from "../assets/components/corps/Sectionner";
import FooterFinal from "../assets/components/footer/FooterFinal";
import CopyR from "../assets/components/footer/utilitaires/CopyR";

import Barre from "../assets/components/header/Barre";

export default function Acceuil() {
  return (
    <div className="w-full">
      <Barre />

      {/* Section d'introduction */}
      <div className="flex justify-start items-center h-[500px] px-20 bg-[url('/src/assets/images/bg4.jpg')] bg-cover">
        <Sectionner />
      </div>

      {/* Section principale */}
      <section className="flex flex-col bg-white h-[800px] w-full px-36 max-sm:px-3 max-sm:justify-center max-sm:h-[700px]">
        
        <div className="h-1/5">
          <PartieUne />
        </div>

        
        <div className="flex flex-row w-full h-3/5 justify-between my-8 max-sm:flex-col max-sm:space-y-2 max-sm:my-1">
          
          <div className="w-2/4 h-full max-sm:w-full">
            <ImgGauche ImgGau="https://i.pinimg.com/736x/6a/71/43/6a7143c4f535b190a7f9c976559846ba.jpg"
                       altIm="ruel Bar"
                       titre="Explorer by moon and light"/>
          </div>

          <div className="w-2/4 h-full flex flex-col space-y-4 max-sm:w-full">
            <div className="rounded-2xl p-2 ">
              <ImgDroite imgD="https://i.pinimg.com/736x/2c/3e/a0/2c3ea049c3f2409216fcfaae684d545f.jpg"
                         altImg="la biere la"
                         titre="Drink when you want and everywhere" />
            </div>

            <div className=" rounded-2xl p-2 max-sm:hidden">
              <ImgDroite imgD="https://i.pinimg.com/736x/e7/6f/1f/e76f1f51496bdc53985f34191e53b837.jpg"
                         altImg=""
                         titre="Try our cocktails"/>
            </div>
          </div>

        </div>
      </section>


    {/* section 2 en black*/}
    <section className="flex flex-col bg-[url('/src/assets/images/bg3.jpg')] bg-cover h-[700px] w-full space-y-4 max-sm:flex-row">
     <div className="flex flex-row w-full justify-center max-sm:flex-col">
      <div className="mx-8 my-8 max-sm:mx-2">
         <Card imgCard="https://img.icons8.com/?size=100&id=e9ne6HZHvrji&format=png&color=000000"
               dateDES="14 Dec 2024"
               descrip="work of art"
               infos="Apple Disign Award 2019-24"
               auteur="Maxwel"/>
      </div>

      <div className="mx-8 my-8 max-sm:mx-2">
         <Card imgCard="https://img.icons8.com/?size=100&id=25987&format=png&color=FFFFFF"
               dateDES="31 Dec 2024"
               descrip="Triomphe"
               infos="food slayer by dragon Natsu"
               auteur="Precious"/>
      </div>

      <div className=" mx-8 my-8 max-sm:mx-2">
         <Card imgCard="https://img.icons8.com/?size=100&id=A4DsujzAX4rw&format=png&color=FFFFFF"
               dateDES="02 Jan 2023"
               descrip="Fire"
               infos="Best App for Mrtiust"
               auteur="Sukuna"/>
      </div> 
     </div>

     <div className="flex flex-row w-full justify-center max-sm:flex-col">
        <div className=" mx-8 my-8 max-sm:mx-2">
          <Card imgCard="https://i.pinimg.com/736x/33/41/73/33417322c98775ae50ab732af1acb69b.jpg"
                dateDES="15 Avr 2024"
                descrip="Rings"
                infos="teste Image pour voir"
                auteur="Beliskony"/>
        </div>

        <div className=" mx-8 my-8 max-sm:mx-2">
          <Card imgCard="https://img.icons8.com/?size=100&id=houGsYyNpCbu&format=png&color=000000"
                dateDES="15 Dec 2024"
                descrip="Fire"
                infos="teste PNG animer pour voir"
                auteur="Beliskony"/>
        </div>

        <div className=" mx-8 my-8 max-sm:mx-2">
          <Card imgCard="https://img.icons8.com/?size=100&id=MXnVeFR2FM4a&format=png&color=FFFFFF"
                dateDES="15 Dec 2024"
                descrip="Ice"
                infos="teste Image Ice Age yeah"
                auteur="Beliskony"/>
        </div>

     </div>

     <div className="flex flex-row w-full h-60 px-14 py-5 my-3 max-sm:hidden">
      <p className="text-white text-wrap text-base text-center">
       Sed repellendus culpa et dolores atque id nihil reiciendis aut minus tenetur. Et ratione nisi ut 
       numquam veritatis qui consequatur autem et dolorem autem rem nulla reiciendis 33 officia nihil. Sit
       beatae quia et aperiam earum ex expedita maxime cum minima voluptate est dolor beatae.
       Id voluptate quod et enim sequi et expedita enim et aspernatur dolores quo quos alias sed velit repudiandae.
      </p>
     </div> 
    </section>


    <footer className="flex flex-col bg-white max-sm:flex-col">
      <FooterFinal></FooterFinal>
      <CopyR></CopyR>
    </footer>
    </div>
    
  );
}
