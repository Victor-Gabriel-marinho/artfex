import { Link } from "react-router-dom";

import styles from "../tailwind/output.css";

// Componentes
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

const catalog = () => {
  return (
    <div>
      <header className="bg-orange-500 h-130 pt-1 bg-[url('./images/img_bg_catalog.png')]">
        <NavBar />
        <h1 className="font-[MuseoModerno] text-7xl text-center mt-[0.8em] text-white">
          {" "}
          CATÁLOGO{" "}
        </h1>
      </header>

      <main className="pb-[5em]">
        <section className="bg-white w-full max-w-[1200px] m-auto rounded-xl mt-[-250px] p-4 shadow-2xl">
          <form className="relative">
            <div className="bg-[url('./images/lupa.png')] bg-cover w-[20px] h-[20px] absolute left-20 top-6.5"></div>
            <input
              className="bg-[#567] rounded-3xl ml-[4em] mt-[1em] mb-[1.5em] p-2 outline-none placeholder-white text-center"
              type="text"
              placeholder="Pesquisar item"
            />
          </form>
          <div className="flex flex-wrap gap-10 justify-center">
            <div className="bg-green-500 w-80 h-[250px]">
              <img
                src="/images/artesãos.png"
                alt="item"
                className="h-full object-cover rounded-md"
              />
            </div>
            <div className="bg-green-500 w-80 h-[250px]">teste</div>
            <div className="bg-green-500 w-80 h-[250px]">teste</div>
            <div className="bg-green-500 w-80 h-[250px]">teste</div>
            <div className="bg-green-500 w-80 h-[250px]">teste</div>
            <div className="bg-green-500 w-80 h-[250px]">teste</div>
            <div className="bg-green-500 w-80 h-[250px]">teste</div>
            <div className="bg-green-500 w-80 h-[250px]">teste</div>
            <div className="bg-green-500 w-80 h-[250px]">teste</div>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default catalog;
