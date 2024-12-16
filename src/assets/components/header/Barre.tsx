import LogoMenu from "./LogoMenu";

export default function Barre() {
    return(
        <nav className="sticky top-0 z-50 py-1 backdrop-blur-lg border-b bg-white border-neutral-700/85">
          <LogoMenu></LogoMenu>
        </nav>
    )
}