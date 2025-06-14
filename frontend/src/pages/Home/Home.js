// import "../resposiveGlobal.css"
import { Link } from "react-router-dom";
import CartImage from "../../assets/images/carrinho-de-compras.png";
import Footer from "../../components/Footer";
import { useContext } from "react";
import { UserContext } from "../../context";
import guia from "../../assets/guia_do_usuario.pdf"
import "../tailwind/output.css";
import Carousel from "../../components/Carousel";

const Home = () => {
  const auth = useContext(UserContext);
  const user = auth

  return (
    <div>
      <header className="bg-[url('./images/fundo-header.png')] bg-fixed bg-no-repeat bg-bottom h-130 pt-5 font-poppins">
        <nav className="bg-[#082621] m-auto w-[90%] flex text-white rounded-[20px] p-[6px] border-1 relative">
          <ul className="flex justify-between w-[180px] m-auto">
            <li className="text-center underline decoration-[#F2994B] decoration-2 underline-offset-[5px]">
              Home
            </li>
            <li className=" relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-pointer after:underline-offset-[5px]">
              {" "}
              <Link to="/catalog"> Catálogo </Link>
            </li>
            <li className=" relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-pointer after:underline-offset-[5px]">
              {" "}
              <a href={guia} target="blank">Ajuda</a>   
            </li>
          </ul>
          <ul>
            {!user.user ? (
              <div className=" flex justify-between items-center w-[190px] h-full">
                <li className="w-[65px] text-center border-2 bg-none text-white pr-[8px] pl-[8px] rounded-xl ">
                  {" "}
                  <Link to="/login"> Login </Link>
                </li>
                <li className="p-[3px] w-[120px] text-center rounded-[20px] bg-[#F2994B] font-bold">
                  {" "}
                  <Link to="/register">Criar conta</Link>{" "}
                </li>
              </div>
            ) : (
              <li className="text-center bg-none text-white w-[35px]">
                {" "}
                <Link to="/cart"> <img src={CartImage} alt="" /> </Link>
              </li>
            )}
          </ul>
        </nav>
        <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-normal">
          <h1 className="text-8xl font-poppins text-center">ArtFex</h1>
          <p className="text-2xl text-center max-w-[540px] m-auto p-[5px]">
            Autenticidade feita à mão — descubra o melhor do artesanato
            cearense."
          </p>
        </section>
      </header>
      <section className="bg-[#082621]">
        <ul className="flex justify-evenly items-center text-white p-3">
          <li className="relative text-center ">
            <div className="absolute bg-[url(./images/feito-a-mão.png)] w-[30px] h-[30px] bg-cover -left-10" id="icone1"></div>
            Feito à mão
          </li>
          <li className="relative w-[150px] text-center">
            <div className="absolute bg-[url(./images/artesãos_locais_bold.png)] w-[60px] h-[60px] bg-cover -left-8 -top-4 text-white" id="icone2"></div>
            Artesãos locais
          </li>
          <li className="relative w-[150px]  text-center ">
            <div className="absolute bg-[url(./images/produtos_exclusivos_bold.png)] w-[50px] h-[50px] bg-cover -left-12 -top-3" id="icone3"></div>
            Produtos exclusivos
          </li>
        </ul>
      </section>
        <section className="box bg-[#F2994B] max-w-[800px] m-auto mt-[60px] rounded-xl flex justify-center">
              <div className=" w-1/2 text-white p-3">
                <h2 className="text-2xl text-center">Seja um artesão parceiro</h2>
                <p className="text-xl text-justify mt-13">Valorize seu talento e aumente suas vendas- seja um artesão parceiro da nossa loja de artesanato</p>
                <div className="box bg-[#2F4B3C] p-[10px] text-center w-full rounded-xl mt-[15px]">
                  Junte-se a nós e faça parte da nossa rede de artesãos
                </div>
              </div>
              <div className="imagem w-1/2 h-[300px] bg-[url(./images/section_mulher.png)] bg-cover rounded-tr-xl rounded-br-xl" id="section-img"></div>
        </section>

        <h2 className="text-[#2F4B3C] text-5xl mt-30 text-center">
        Depoimentos de nossos artesãos
      </h2>
      <Carousel/>
      <footer className="mt-50">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
