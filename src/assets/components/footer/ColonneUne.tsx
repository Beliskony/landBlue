import logo from "../../images/LogoOne.png"

const ColonneUne = () => {
    return (
        <div className="flex flex-col justify-center items-center max-sm:justify-around">
            <img src={logo} className="h-20 w-20 object-cover"/>
            <h3 className="text-2xl text-wrap font-extrabold text-black text-center max-sm:hidden">Let us be your FACE-UP</h3>

        </div>
    );
}

export default ColonneUne;
