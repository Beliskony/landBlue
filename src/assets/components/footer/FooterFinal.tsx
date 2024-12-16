import ColonneDeux from "./ColonneDeux";
import ColonneTrois from "./ColonneTrois";
import ColonneUne from "./ColonneUne";

const FooterFinal = () => {
    return (
        <div className="h-52 w-full flex flex-row px-10 py-4 bg-white max-sm:flex-col max-sm:h-[350px] max-sm:space-y-1">
            <div className="flex flex-col w-1/5 max-sm:w-full">
         <ColonneUne></ColonneUne>

      </div>

      <div className="flex flex-row w-3/5 max-sm:space-x-28">
        <div className="flex flex-col w-1/3 mx-3">
           <ColonneDeux titre="Information"
                        optionUn="About Us"
                        optionDeux="Events"
                        optionTrois="Travels"
                        optionQuatro="Red-Bar"
                        optionCinq="Food"/>
        </div>
           
        <div className="flex flex-col w-1/3 mx-3 max-sm:hidden">
           <ColonneDeux titre="Helpful Links"
                        optionUn="Services"
                        optionDeux="Support"
                        optionTrois="Terms & Condition"
                        optionQuatro="Privacy Policy"
                        />
        </div>

        <div className="flex flex-col w-1/3 mx-3">
           <ColonneDeux titre="Our Services"
                        optionUn="Brands List"
                        optionDeux="Fashion List"
                        optionTrois="Patners"
                        />
        </div>


      </div>

      <div className="flex flex-col w-1/5 max-sm:justify-center max-sm:items-center max-sm:w-full">
      <ColonneTrois></ColonneTrois>
      </div>

    </div>
    );
}


export default FooterFinal;
