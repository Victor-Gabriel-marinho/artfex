import Footer from "../../components/Footer";
import CartImage from "../../assets/images/carrinho-de-compras.png";
import TrashBin from "../../assets/images/trashBin.png";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { useContext } from "react";
import Modal from "../../components/Modal";
import { UserContext } from "../../context";
import axios from "axios";

import "../../resposiveGlobal.css";

const Cart = () => {
  const { user } = useContext(UserContext);
  const [cart_prod, setCartProd] = useState([]);
  const [desiredProduct, setdesireProduct] = useState([]);
  const [valortotal, setvalortotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [openmodal, setopenmodal] = useState(false);
  const [abrir, setAbrir] = useState(false)

  useEffect(() => {
    const id = user.user.id;
    setLoading(true);
    axios
      .get("http://127.0.0.1:5000/produtos/get_cart/" + id)
      .then((response) => {
        setCartProd(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("erro ao fazer requisição:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    somar_valores();
  }, [desiredProduct]);

  const somar_valores = () => {
    const valores = desiredProduct.map((prod) => prod.preco);
    setvalortotal(
      valores.reduce((acumulado, valorAtual) => acumulado + valorAtual, 0)
    );
  };

  const check_prod = (e, prod) => {
    const checkbox = e.target.checked;

    if (checkbox) {
      setdesireProduct((prevProduct) => [...prevProduct, prod]);
    } else {
      setdesireProduct((prevProduct) =>
        prevProduct.filter((produto) => produto.id !== prod.id)
      );
    }
    somar_valores();
  };

  const delet_item = (prod) => {
    console.log(prod);
  };

  const handleModal = () => {
    setopenmodal(!openmodal);
    setAbrir(false)
  };

  const abrirmodal = () => {
    setAbrir(true)
  }

  return (
    <div className="mt-4">
      <div className="bg-[#F2994B] w-[90%] h-15 rounded-full m-auto pl-10 flex">
        <div className="flex gap-2 items-center ">
          <img src={CartImage} className="w-[35px] " />
          <h2 className="text-white font-light text-3xl">Carrinho</h2>
        </div>
      </div>

      <section className="h-[60vh] flex mt-5">
        {/* box - itens */}
        <div className="flex w-[90%] m-auto gap-4 container-cart">
          <div className="flex flex-col justify-center w-[60%] border-2 border-gray-400 rounded-xl gap-8 p-3 box-itens-cart">
            {!loading ? (
            <div className="flex flex-col gap-8 max-h-[60vh] overflow-y-auto pr-2">
              {cart_prod.map((prod) => ( 
                <div
                  className="flex items-center justify-between"
                  key={prod.id}
                >
                  <Modal className="w-[400px] h-[300px]" isOpen={openmodal} setCloseModal={handleModal}>
                    <h2 className="font-medium text-xl"> Tem certeza que deseja deletar? </h2>
                    <div className="h-[5rem] flex items-center justify-center gap-2">
                        <input
                          className="w-[100px] h-[50px] bg-green-600 text-black cursor-pointer"
                          onClick={delet_item}
                          type="submit"
                        ></input>
                        <input
                          className="w-[100px] h-[50px] bg-red-400 text-black cursor-pointer"
                          type="submit"
                          onClick={() => delet_item(prod)}
                        ></input>
                    </div>

                    {/* <div>{prod.id}</div> */}  

                  </Modal>

                  <div className="flex w-[40%] justify-between items-center pl-5 shrink-0 box-items">
                    <input
                      type="checkbox"
                      onClick={(e) => {
                        check_prod(e, prod);
                        check_prod(e,prod);
                      }}
                      className="w-[1.2rem] cursor-pointer"
                    />
                    <div className="flex ml-2 gap-3">
                      <img
                        src={prod.url}
                        className="w-[170px] h-[170px] rounded-xl img-box-items shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="text-gray-400"> Categoria </span>
                        <p className="font-medium"> {prod.nome} </p>
                        <span className="text-[#F2994B] font-medium">
                          {" "}
                          R$ {prod.preco},00{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    src={TrashBin}
                    className="w-[30px] h-[35px] cursor-pointer mr-4 trashBin-box-items"
                    onClick={handleModal}
                  />
                </div>
              ))}
            </div>
            ) : (
              <div className="h-full w-full flex items-center justify-center">
                <div className="flex items-center justify-center w-[100px] h-[100px]">
                  <AiOutlineLoading className="text-5xl animate-spin text-gray-400" />
                </div>
              </div>
            )}
          </div>

          {/* box - pagamento */}
          <div className="w-[40%] border-2 border-gray-400 pl-20 pr-20 rounded-xl flex flex-col justify-center box-itens-pay">
            <h1 className="font-bold text-xl mb-5 mt-5 text-center"> Pagamento </h1>
            <div className="max-h-[50vh] overflow-y-auto scrollbar-hide pr-2 box-pay">
              {desiredProduct.map((prod) => (
                <div
                  className="border-b-1 border-gray-400 flex justify-between p-5 mb-2"
                  key={prod.id}
                >
                  <p className="text-gray-400"> {prod.nome} </p>
                  <span className="text-gray-400"> + R${prod.preco},00</span>
                </div>
              ))}
              <div className="flex justify-between p-5 mt-2 mb-4">
                <p className="font-bold"> Total </p>
                <span className="font-bold"> R$ {valortotal},00</span>
              </div>
              <button className="bg-[#082621] p-2 mb-3 w-full rounded-full text-white cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                Comprar agora
              </button>
            </div>

            <button className="bg-[#082621] p-2 mb-3 w-full rounded-full text-white cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
              onClick={abrirmodal}
            >
              Comprar agora
            </button>
            <Modal isOpen={abrir} setCloseModal={handleModal}>
                    <h2>tem certeza?</h2>
                    <input
                      className="w-100px bg-zinc-400 text-black cursor-pointer"
                      onClick={delet_item}
                      type="submite"
                      placeholder="Deletar"
                    ></input>
                    <input
                      className="w-100px bg-zinc-400 text-black cursor-pointer"
                      type="submite"
                      placeholder="Cancelar"
                    ></input>
                  </Modal>
          </div>
        </div>
      </section>

      <footer className="mt-20 footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Cart;
