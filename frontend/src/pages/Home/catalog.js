// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"
import styles from "../tailwind/output.css";

// Componentes
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";



const Catalog = () => {
  //states
  const [produtos, setprodutos] = useState([])
  //Hooks
  useEffect(() => {
    axios
    .get('http://127.0.0.1:5000/produtos/produtos')
    .then(Response => {
      setprodutos(Response.data)
      console.log(Response.data)
    }).catch(Error => {
      console.log("erro ao fazer requisição")
    })
  }, [])

  return (
    <div>
      <header className="h-130 pt-1 bg-[url('./images/img_bg_catalog.png')]">
        <NavBar />
        <h1 className="font-[MuseoModerno] text-7xl text-center mt-[0.8em] text-white">
          {" "}
          CATÁLOGO{" "}
        </h1>
      </header>

      <main className="pb-[5em]">
        <section className="bg-white w-full max-w-[1300px] m-auto rounded-xl mt-[-250px] p-4 shadow-2xl">
          <form className="relative">
            <div className="bg-[url('./images/lupa.png')] bg-cover w-[20px] h-[20px] absolute left-40 top-6.5"></div>
            <input
              className="bg-[#567] rounded-3xl ml-[9em] mt-[1em] mb-[1.5em] p-2 outline-none placeholder-white text-center text-white"
              type="text"
              placeholder="Pesquisar item"
            />
          </form>

          <div className="flex flex-wrap gap-10 justify-center">
            {produtos.map((produtos) =>(
            <div className="w-[300px] h-[350px]" key={produtos.id}>
              <img 
              src={produtos.url}
              className=" w-full h-full max-h-[300px] bg-cover rounded-xl"/>
              <div className="flex justify-between pl-2 pr-2">
                <span className="text-gray-500 font">Categoria</span>
                <span className="text-[#F2994B] font-bold font-[Poppins]">
                  R$100,00
                </span>
              </div>
              <p className="font-bold font-[Poppins] pl-2">{produtos.nome}</p>
            </div>))}
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Catalog;
