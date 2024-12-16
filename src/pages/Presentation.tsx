import CardDeSix from "../assets/components/corps/cards/CardDeSix";
import FooterFinal from "../assets/components/footer/FooterFinal";
import CopyR from "../assets/components/footer/utilitaires/CopyR";
import Barre from "../assets/components/header/Barre";
import { SliderIntro } from "../assets/components/presentationPages/SlidersIntro";
import TextEntree from "../assets/components/presentationPages/TextEntree";
import PartitionText from "../assets/components/presentationPages/textEtTitre/PartitionText";
import TitreSection from "../assets/components/presentationPages/textEtTitre/TitreSection";

export default function Presentation() {
   return(
      <div>
         <header>
            <Barre></Barre>
         </header>
         <body className="w-full px-9 bg-black  justify-center items-center">
            {/*section1*/}
            <section className="h-[500px] w-full px-3 flex bg-black flex-row space-x-11 items-center">
               <div className="w-3/5">
                   <TextEntree></TextEntree>
               </div>
                <div className="w-2/5 justify-center">
                   <SliderIntro></SliderIntro>
                </div>
            </section>

               <hr></hr>

            {/*section2*/}
            <section className="h-[400px] w-full px-3 grid grid-cols-3 bg-black items-center gap-2 ">
               <div className="h-32  flex justify-center items-center bg-white rounded-xl hover:bg-[#F5CB5C]">
                  <CardDeSix imgSix="https://img.icons8.com/?size=100&id=keTRcEz9lVEz&format=png&color=000000"
                             titreCard="Travels anywhere"
                             descriptionSix="Cum tenetur aspernatur qui mollitia odio aut totam enim sit consectetur accusantium. 
                                             Sit quaerat officiis aut quae harum ut animi laborum et earum dignissimos"/>
               </div>

               <div className="h-32  flex justify-center items-center bg-white rounded-xl hover:bg-[#F5CB5C]">
                  <CardDeSix imgSix="https://img.icons8.com/?size=100&id=Io9mcNwfe_a6&format=png&color=000000"
                             titreCard="Dance drink"
                             descriptionSix="Cum tenetur aspernatur qui mollitia odio aut totam enim sit consectetur accusantium. 
                                             Sit quaerat officiis aut quae harum ut animi laborum et earum dignissimos"/>
               </div>

               <div className="h-32  flex justify-center items-center bg-white rounded-xl hover:bg-[#F5CB5C]">
                  <CardDeSix imgSix="https://img.icons8.com/?size=100&id=48897&format=png&color=000000"
                             titreCard="Meet people"
                             descriptionSix="Cum tenetur aspernatur qui mollitia odio aut totam enim sit consectetur accusantium. 
                                             Sit quaerat officiis aut quae harum ut animi laborum et earum dignissimos"/>
               </div>

               <div className="h-32  flex justify-center items-center bg-white rounded-xl hover:bg-[#F5CB5C]">
                  <CardDeSix imgSix="https://img.icons8.com/?size=100&id=aAl2sYjZud4m&format=png&color=000000"
                             titreCard="swim anywhere"
                             descriptionSix="Cum tenetur aspernatur qui mollitia odio aut totam enim sit consectetur accusantium. 
                                             Sit quaerat officiis aut quae harum ut animi laborum et earum dignissimos"/>
               </div>

               <div className="h-32  flex justify-center items-center bg-white rounded-xl hover:bg-[#F5CB5C]">
                  <CardDeSix imgSix="https://img.icons8.com/?size=100&id=P9YS1LfFmaut&format=png&color=000000"
                             titreCard="play anywhere"
                             descriptionSix="Cum tenetur aspernatur qui mollitia odio aut totam enim sit consectetur accusantium. 
                                             Sit quaerat officiis aut quae harum ut animi laborum et earum dignissimos"/>
               </div>

                <div className="h-32  flex justify-center items-center bg-white rounded-xl hover:bg-[#F5CB5C]">
                  <CardDeSix imgSix="https://img.icons8.com/?size=100&id=2KWR1WgZ9Qoh&format=png&color=000000"
                             titreCard="Eat anywhere"
                             descriptionSix="Cum tenetur aspernatur qui mollitia odio aut totam enim sit consectetur accusantium. 
                                             Sit quaerat officiis aut quae harum ut animi laborum et earum dignissimos"/>
               </div>


            </section>

            {/*section3*/}
             <section className="h-[500px] flex flex-col w-full justify-evenly bg-[url('/src/assets/images/pexelsBG.jpg')] bg-cover
              bg-black bg-opacity-50 bg-blend-overlay items-center my-2">
                 <TitreSection titre="Luxury for all"
                               descrip="Happy travelers get more fun than anybody in town ! Discory is in your hands"/>
             

                 <PartitionText texteUni="Ea modi architecto et omnis sapiente eos omnis ducimus. In possimus 
                 reiciendis et odit amet et dolores necessitatibus."/>
             
             </section>

         </body>
         <footer>
            <FooterFinal></FooterFinal>
            <CopyR></CopyR>
         </footer>
      </div>
   )
   
}