import Footer from "../../components/Footer";
import CartImage from "../../assets/images/carrinho-de-compras.png";
import ImageItem from "../../assets/images/image.png"
import TrashBin from "../../assets/images/trashBin.png"

import "../../resposiveGlobal.css";

const Cart = () => {
  return (
    <div className="mt-4">
      <div className="bg-[#F2994B] w-[90%] h-15 rounded-full m-auto pl-10 flex">
        <div className="flex gap-2 items-center ">
          <img src={CartImage} className="w-[35px] " />
          <h2 className="text-white font-light text-3xl">Carrinho</h2>
        </div>
      </div>

      <section className="h-[60vh] flex">

        {/* box - itens */}
        <div className="flex w-[90%] m-auto gap-4 container-cart">

          <div className="flex flex-col justify-center w-[60%] border-2 border-gray-400 rounded-xl gap-8 box-itens-cart">
            <div className="flex items-center justify-between">
              <div className="flex w-[40%] justify-between items-center pl-5">
                <input type="checkbox" className="w-[1.2rem] h-[1.2rem] cursor-pointer"/>
                <div className="flex gap-3">
                  <img src={ImageItem} className="w-[170px] h-[170px] rounded-xl"/>
                  <div>
                    <span className="text-gray-400"> Categoria </span>
                    <p className="font-medium"> Name </p>
                    <span className="text-[#F2994B] font-medium"> R$ 100,00 </span>
                  </div>
                </div>
              </div>
              <img src={TrashBin} className="w-[30px] h-[35px] cursor-pointer mr-4"/>
            </div>    
        
          </div>

          {/* box - pagamento */}
          <div className="w-[40%] border-2 border-gray-400 pl-20 pr-20 rounded-xl flex flex-col justify-center box-itens-pay">
            <h1 className="font-bold text-xl mb-5 mt-5"> Pagamento </h1>

            <div className="border-b-1 border-gray-400 flex justify-between p-5 mb-2">
              <p className="text-gray-400"> Name </p>
              <span className="text-gray-400"> + R$100,00</span>
            </div>

            <div className="flex justify-between p-5 mt-2 mb-4">
              <p className="font-bold"> Total </p>
              <span className="font-bold"> R$ 1000,00</span>
            </div>
            
            <button className="bg-[#082621] p-2 mb-3 w-full rounded-full text-white cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
              Comprar agora
            </button>
          </div>
        </div>
      </section>

      <footer className="mt-8">
        <Footer/>
      </footer>
    </div>
  );
};

export default Cart;
