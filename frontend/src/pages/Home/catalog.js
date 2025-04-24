import { Link } from "react-router-dom";

import styles from "../tailwind/output.css";

// Componentes
import NavBar from "../../components/Navbar";

const catalog = () => {
  return (
    <div>
      <header className="bg-orange-500 h-130 pt-1">
        <NavBar />
        <h1 className="font-[MuseoModerno] text-7xl text-center mt-[0.8em] text-white"> CATÁLOGO </h1>
      </header>

      <main>
        <section className="bg-blue-700 h-200 w-300 m-auto rounded-md -mt-70">
          <form action="">
            <input className="bg-[#567] rounded-md ml-[7.5em]" type="text" placeholder="Pesquisar item"/>
          </form>
          <div className="flex justify-center flex-wrap gap-10">
            <div className="bg-white w-80 h-50 flex-wrap">teste</div>
            <div className="bg-white w-80 h-50">teste</div>
            <div className="bg-white w-80 h-50">teste</div>
            <div className="bg-white w-80 h-50">teste</div>
            <div className="bg-white w-80 h-50">teste</div>
            <div className="bg-white w-80 h-50">teste</div>
            <div className="bg-white w-80 h-50">teste</div>
            <div className="bg-white w-80 h-50">teste</div>
            <div className="bg-white w-80 h-50">teste</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default catalog;
