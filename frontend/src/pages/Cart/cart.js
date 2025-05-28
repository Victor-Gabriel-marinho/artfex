import Footer from "../../components/Footer";
import CartImage from "../../assets/images/carrinho-de-compras.png";

const Cart = () => {
  return (
    <div className="mt-4">
      <div className="bg-[#F2994B] w-[90%] h-15 rounded-full m-auto pl-10 flex">
        <div className="flex gap-2 items-center ">
          <img src={CartImage} className="w-[35px] " />
          <h2 className="text-white font-light text-3xl">Carrinho</h2>
        </div>
      </div>

      <section className="mb-4">

        {/* box - itens */}
        <div className="flex w-[90%] m-auto justify-around gap-4">

          <div className="mt-4 w-[60%] border-2 border-gray-400 rounded-xl">
            <div className="w-[300px] h-[350px]">
              <img className=" w-full h-full max-h-[300px] bg-cover rounded-xl" />
              <div className="flex justify-between pl-2 pr-2 pt-1">
                <span className="text-gray-500 font">Categoria</span>
                <span className="text-[#F2994B] font-bold font-[Poppins]">
                  R$100,00
                </span>
              </div>
              <p className="font-bold font-[Poppins] pl-2"></p>
            </div>
          </div>

          {/* box - pagamento */}
          <div className="mt-4 w-[40%] border-2 border-gray-400 pl-20 pr-20 rounded-xl">
            <h1 className="font-bold text-xl mb-5 mt-5"> Pagamento </h1>

            <div className="border-b-1 border-gray-400 flex justify-between p-5 mb-2">
              <p className="text-gray-400"> Name </p>
              <span className="text-gray-400"> + R$100,00</span>
            </div>

            <div className="flex justify-between p-5 mt-2 mb-4">
              <p className="font-bold"> Total </p>
              <span className="font-bold"> R$ 1000,00</span>
            </div>

            <button className="bg-[#082621] p-2 w-full rounded-full text-white cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
              Comprar agora
            </button>
          </div>
        </div>
      </section>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Cart;
