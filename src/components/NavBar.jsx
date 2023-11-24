import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

function NavBar() {
    return (
        <header className="padding-x py-4  z-50 w-full sticky top-0 bg-white  shadow-lg">
            <nav className="flex justify-between items-center max-container ">
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={29}
                        className='m-0 w-[120px] h-[60px]'
                    />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-24 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red duration-0 ">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden max-lg:block">
                    <img src={hamburger} alt="hamburger" 
                        className=""
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
