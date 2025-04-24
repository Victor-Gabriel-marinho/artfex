import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#082621] h-[200px] flex justify-center flex-col text-center">
      <div className="flex justify-around w-full h-full items-center m-auto flex-wrap">
        <h1 className="text-white font-[MuseoModerno] text-2xl">ArtFex</h1>
        <ul>
          <li>
            <div className="bg-[url('./images/instagram.png')] bg-cover w-[20px] h-[20px] cursor-pointer mb-[0.5em]"></div>
          </li>
          <li>
            <div className="bg-[url('./images/email.png')] bg-cover w-[20px] h-[20px] cursor-pointer mb-[0.5em]"></div>
          </li>
          <li>
            <div className="bg-[url('./images/telefone.png')] bg-cover w-[20px] h-[20px] cursor-pointer mb-[0.5em]"></div>
          </li>
        </ul>
      </div>
      <span className="w-full bg-[#F2994B] h-auto text-center text-white p-2"> &copy; 2025 ArtFex. Todos os direitos reservados</span>
    </footer>
  );
};

export default Footer;
