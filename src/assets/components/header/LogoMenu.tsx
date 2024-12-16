import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/LogoOne.png";

export default function LogoMenu() {
  const [isOpen, setIsOpen] = useState(false); // État pour le menu mobile

  return (
    <div className="px-4 mx-auto relative text-sm bg-white shadow-lg">
      <div className="flex justify-between items-center py-1">
        {/* Logo et Titre */}
        <div className="flex items-center flex-shrink-0">
          <img className="h-14 w-14 mr-4" src={logo} alt="logo" />
          <span className="text-lg font-bold tracking-tight text-black">
            Axel-Web
          </span>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex space-x-10">
          <li>
            <Link to="/" className="text-black hover:text-blue-500">
              Acceuil
            </Link>
          </li>
          <li>
            <Link to="/presentation" className="text-black hover:text-blue-500">
              Presentation
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-black hover:text-blue-500">
              Services
            </Link>
          </li>
          <li>
            <Link to="/Contacts" className="text-black hover:text-blue-500">
              Contacts
            </Link>
          </li>
        </ul>

        {/* Bouton d'Abonnement */}
        <div className="hidden lg:flex mx-5 bg-blue-500 hover:bg-black py-2 px-4 rounded-3xl transition duration-300">
          <a href="#" className="text-white hover:text-white">
            Abonnement
          </a>
        </div>

        {/* Bouton Mobile */}
        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col space-y-4 mt-4 bg-gray-100 p-4 rounded-lg shadow-lg">
          <li>
            <a href="#" className="text-black hover:text-blue-500">
              Acceuil
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-blue-500">
              Presentation
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-blue-500">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-blue-500">
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-center text-white bg-blue-500 hover:bg-black py-2 px-4 rounded-lg"
            >
              Abonnement
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
