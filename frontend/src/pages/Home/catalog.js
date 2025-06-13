// import { useEffect, useState } from "react";
// import axios from "axios"
// import styles from "../tailwind/output.css";

// Componentes
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CatalogComponent from "../../components/Catalog";

const Catalog = () => {
  return (
    <div id="containerCatalog">
      <header className="h-130 pt-1 bg-[url('./images/img_bg_catalog.png')] bg-cover bg-no-repeat w-full">
        <NavBar />
        <h1 className="font-[MuseoModerno] text-7xl text-center mt-[0.8em] text-white title-catalog">
          {" "}
          CATÁLOGO{" "}
        </h1>
      </header>

      <main className="pb-[5em]">
        <CatalogComponent />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Catalog;
