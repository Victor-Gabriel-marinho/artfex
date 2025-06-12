//Componentes
import { NavLink, Link } from "react-router-dom";
import CartImage from "../assets/images/carrinho-de-compras.png"

const NavBar = () => {
  const linkBase =
    "group relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:transition-all after:duration-300";

  return (
    <nav className="bg-[#082621] m-auto w-[90%] flex justify-center text-white rounded-[20px] p-[8px] border mt-[1.5em]">
      <ul className="flex gap-10 items-center">
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBase} after:w-0 hover:after:w-full ${isActive ? "after:w-full after:bg-[#F2994B]" : "after:bg-white"
              }`
            }
          >
          </NavLink>
        </li>

        <li className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} after:w-0 hover:after:w-full ${isActive ? "after:w-full after:bg-[#F2994B]" : "after:bg-white"
              }`
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              `${linkBase} after:w-0 hover:after:w-full ${isActive ? "after:w-full after:bg-[#F2994B]" : "after:bg-white"
              }`
            }
          >

            Catálogo
          </NavLink>
        </li>

        <li className="text-center bg-none text-white w-[35px] items-end">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${linkBase} after:w-0 hover:after:w-full ${isActive ? "after:w-full after:bg-[#F2994B]" : "after:bg-white"
              }`
            }
          >

            <img src={CartImage}/>
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default NavBar;
