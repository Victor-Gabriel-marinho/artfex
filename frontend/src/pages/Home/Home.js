import { Link } from "react-router-dom";
import styles from "../tailwind/output.css";
import CartImage from "../../assets/images/carrinho-de-compras.png";
import Footer from "../../components/Footer";
import { useContext } from "react";
import { UserContext } from "../../context";

const Home = () => {
  const auth = useContext(UserContext);
  const user = auth
  console.log(user)

  return (
    <div>
      <header className="bg-[url('./images/fundo-header.png')] bg-fixed bg-no-repeat bg-bottom h-130 pt-5 font-poppins relative">
        <nav className="bg-[#082621] m-auto w-[90%] flex items-center text-white rounded-[20px] p-[6px] border-1 ">
          <ul className="flex justify-between items-center w-55 m-auto ml-110">
            <li className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
              {" "}
              <Link to="/about"> </Link>
            </li>
            <li className="underline decoration-[#F2994B] underline-offset-[3px]">
              Home
            </li>
            <li className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
              {" "}
              <Link to="/catalog"> Catálogo </Link>
            </li>
          </ul>
          <ul className="w-[230px] flex justify-around items-center">
            <a
              href="#"
              className="text-black bg-[url('./images/carrinho-de-compras.png')]"
            ></a>
            {!user.user ? (        
              <div className="flex flex-row justify-between items-center w-[200px]">
                <li className="w-[65px] text-center border-2 bg-none text-white pr-[8px] pl-[8px] rounded-xl">
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
                <Link to="/cart"> <img src={CartImage} /> </Link>
              </li>
            ) }
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
      <section className="bg-[#082621] p-5">
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
          <p className="mt-[30px] text-2xl text-[#2F4B3C]">
            participe das nossas{" "}
            <a
              href="#"
              className="bg-[#F2994B] text-white pl-[5px] pr-[5px] rounded-xl "
            >
              Redes Sociais
            </a>
          </p>
        </div>
      </section>
      <section className="flex flex-col justify-between items-top w-[720px] m-auto h-[260px] p-[20px] relative">
        <div className="bg-[#F2994B] w-[157px] h-[188px] absolute top-0 right-0 rounded-[20px] flex items-center justify-center">
          <div className="bg-[url('./images/Logo.svg')] bg-cover w-3/4 h-3/4 invert"></div>
        </div>
        <h2 className="text-[#F2994B] text-5xl font-poppins">
          Baixe o nosso aplicativo
        </h2>
        <p className="w-[420px] text-[#606060] text-2xl font-semibold">
          tenha acesso a todas as funcionalidades na palma da sua mão
        </p>
        <a
          href="#"
          className="m-auto text-white text-center bg-[#2F4B3C] rounded-xl p-[1px] w-[167px]"
        >
          Baixar app
        </a>
      </section>
      <h2 className="text-[#2F4B3C] text-4xl mt-30 text-center">
        Depoimentos de nossos artesãos
      </h2>
      <section className="flex justify-between items-center flex-wrap m-auto mt-5 gap-3">
        <div className="bg-[#F2994B] w-[450px] p-[10px] rounded-xl m-auto">
          <div className="bg-[url('./images/mulher1.png')] bg-cover h-[100px] w-[100px] absolute rounded-[100%]"></div>
          <h3 className="text-white text-center text-2xl mt-[40px]">
            Olinda Rendeira
          </h3>
          <p className="text-white w-[90%] m-auto mt-8">
            Um projeto deveria ser feito para trazer o interesse e a cultura não
            morrer. Um projeto louvável pra trazer visibilidade, seria a chave,
            a questão das redes seria bem essencial..{" "}
          </p>
        </div>
        <div className="bg-[#F2994B] w-[450px] p-[10px] rounded-xl m-auto">
          <div className="bg-[url('./images/mulher2.png')] bg-cover  h-[100px] w-[100px] absolute rounded-[100%]"></div>
          <h3 className="text-white text-center text-2xl mt-[40px]">
            Flaviana
          </h3>
          <p className="text-white w-[90%] m-auto mt-8">
            A opinião quando ao projeto é que seria uma benção, seria muito bom
            por trazer visibilidade ao trabalho.{" "}
          </p>
        </div>
        <div className="bg-[#F2994B] w-[450px] p-[10px] rounded-xl m-auto">
          <div className="bg-[url('./images/homem.png')] bg-cover  h-[100px] w-[100px] absolute rounded-[100%]"></div>
          <h3 className="text-white text-center text-2xl mt-[40px]">
            Nazareno
          </h3>
          <p className="text-white w-[90%] m-auto mt-8">
            Importante, a arte está aos poucos acabando e a educação deveria
            trazer para os mais novos essa abordagem para não acarretar seu
            fim.Interessante por trazer visibilidade{" "}
          </p>
        </div>
        <div className="bg-[#F2994B] w-[450px] p-[10px] rounded-xl m-auto">
          <div className="bg-[url('./images/mulher3.png')] bg-cover  h-[100px] w-[100px] absolute rounded-[100%]"></div>
          <h3 className="text-white text-center text-2xl mt-[40px]">
            Marlúcia
          </h3>
          <p className="text-white w-[90%] m-auto mt-8">
            Uma ideia legal, trazer uma dificuldade maior e ampliar as vendas.
          </p>
        </div>
      </section>
      <footer className="mt-50">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
