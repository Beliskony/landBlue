import Mailto from "./utilitaires/Mailto";
import TelTo from "./utilitaires/TelTo";

const ColonneTrois = () => {
    return (
        <div className="flex flex-col space-y-3 justify-center items-center w-40 max-sm:w-full">
            <div>
                <h2 className="text-xl font-bold underline">Contacts Us</h2>
            </div>
            <div className="flex flex-col max-sm:flex-row max-sm:space-x-3">
            <TelTo></TelTo>
            <Mailto></Mailto>
            </div>

        </div>
    );
}


export default ColonneTrois;
