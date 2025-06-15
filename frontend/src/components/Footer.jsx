
const Footer = () => {
  return (
    <footer className="bg-[#082621] h-[200px] flex justify-center flex-col text-center">
      <div className="flex justify-around w-full h-full items-center m-auto flex-wrap">
        <h1 className="text-white font-[MuseoModerno] text-2xl">ArtFex</h1>
        <ul>
          
          <li className="flex gap-5 text-white">
            <div className="bg-[url('./images/instagram.png')] bg-cover w-[20px] h-[20px] cursor-pointer mb-[0.5em]"></div>
            <a href="https://www.instagram.com/artf_ex/" target="blank"> artf_ex </a>
          </li>

          <li className="flex gap-5 text-white">
            <div className="bg-[url('./images/email.png')] bg-cover w-[20px] h-[20px] cursor-pointer mb-[0.5em]"></div>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbSLLFdVQTrTRnBdKsXcnMPlJqgTZGwlTFwkbxzPZKzwKvFgNvhzMLTKcZxSwDSKWgLVKg">artfex.empresa@gmail.com</a>
          </li>

          <li className="flex gap-5 text-white">
            <div className="bg-[url('./images/telefone.png')] bg-cover w-[20px] h-[20px] cursor-pointer mb-[0.5em]"></div>
            <p>+55 85 9789-3130</p>
          </li>

        </ul>
      </div>
      <span className="w-full bg-[#F2994B] h-auto text-center text-white p-2"> &copy; 2025 ArtFex. Todos os direitos reservados</span>
    </footer>
  );
};

export default Footer;

