import CardDeSix from "../assets/components/corps/cards/CardDeSix";
import FooterFinal from "../assets/components/footer/FooterFinal";
import CopyR from "../assets/components/footer/utilitaires/CopyR";
import Barre from "../assets/components/header/Barre";
import { SliderIntro } from "../assets/components/presentationPages/SlidersIntro";
import TextEntree from "../assets/components/presentationPages/TextEntree";

export default function Presentation() {
   return(
      <div>
         <header>
            <Barre></Barre>
         </header>
         <body className="w-full px-9 bg-black justify-center items-center">
            {/*section1*/}
            <section className="h-[500px] w-full flex flex-row  items-center">
               <div className="w-3/5">
                   <TextEntree></TextEntree>
               </div>
                <div className="w-2/5">
                   <SliderIntro></SliderIntro>
                </div>
            </section>

               <hr></hr>

            {/*section2*/}
            <section className="h-[400px] w-full grid grid-cols-3 items-center gap-2 ">
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


         </body>
         <footer>
            <FooterFinal></FooterFinal>
            <CopyR></CopyR>
         </footer>
      </div>
   )
   
}