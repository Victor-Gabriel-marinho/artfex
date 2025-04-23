import { Link } from "react-router-dom";
import styles from "../tailwind/output.css";

//Componentes
import { NavBar } from "../../components/Navbar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <header className="bg-[url('./images/fundo-header.png')] bg-right h-130 pt-5 font-poppins relative">
        <nav className="bg-[#082621] m-auto w-[90%] flex items-center text-white rounded-[20px] p-[6px] border-1 ">
          <ul className="flex justify-between items-center w-55 m-auto ml-110">
            <li className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Sobre nós
            </li>
            <li className="underline decoration-2 underline-offset-[3px]">
              Home
            </li>
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
        <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-normal">
          <h1 className="text-9xl font-poppins text-center">ArtFex</h1>
          <p className="text-2xl text-center w-3/4 m-auto">
            Autenticidade feita à mão — descubra o melhor do artesanato
            cearense."
          </p>
        </section>
      </header>
      <section className="bg-[#082621] p-5  ">
        <ul className="flex justify-evenly center text-white">
          <li className="relative">
            <div className="bg-[url(./images/feito-a-mão.png)] bg-cover w-[34px] h-[32px] absolute -left-10 -top-1"></div>
            Feito à mão
          </li>
          <li className="relative">
            <div className="bg-[url(./images/artesãos_locais_bold.png)] bg-cover w-[65px] h-[65px] absolute -left-13 -top-5"></div>
            Artesãos locais
          </li>
          <li className="relative">
            <div className="bg-[url(./images/produtos_exclusivos_bold.png)] bg-cover w-[45px] h-[45px] absolute -left-10 -top-2"></div>
            Produtos exclusivos
          </li>
        </ul>
      </section>
      <section className="p-20 flex justify-evenly items-top m-auto">
        <div className="bg-[url('./images/artesãos.png')] bg-cover h-[400px] w-[400px] rounded-[40px]"></div>
        <div className="flex flex-wrap w-[500px] h-[100px] justify-between items-center mt-[40px]">
          <h1 className=" text-4xl text-[#2F4B3C]">Seja um Artesão parceiro</h1>
          <p className="text-2xl text-[#606060]">
            Valorize seu talento e aumente suas vendas — seja um artesão
            parceiro da nossa loja de artesanato cearense!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
