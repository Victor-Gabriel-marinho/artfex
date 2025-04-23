//Componentes
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="bg-[#082621] m-auto w-[90%] flex items-center text-white rounded-[20px] p-[6px] border-1 ">
      <ul className="flex justify-between items-center w-55 m-auto ml-110">
        <li className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
          Sobre nós
        </li>
        <li className="underline decoration-2 underline-offset-[3px]">Home</li>
        <li className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
          Catálogo
        </li>
      </ul>
      <ul className="w-[230px] flex justify-around items-center">
        <a
          href="#"
          className="text-black bg-[url('./images/carrinho-de-compras.png')]"
        ></a>
        <li className="w-[65px] text-center border-2 bg-none text-white pr-[8px] pl-[8px] rounded-xl">
          {" "}
          <Link to="/login"> Login </Link>
        </li>
        <li className="p-[3px] w-[120px] text-center rounded-[20px] bg-[#F2994B] font-bold">
          {" "}
          <Link to="/register">Criar conta</Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
