import Footer from "../../components/Footer";
import CartImage from "../../assets/images/carrinho-de-compras.png";
import TrashBin from "../../assets/images/trashBin.png";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { useContext } from "react";
import Modal from "../../components/Modal";
import { UserContext } from "../../context";
import axios from "axios";

import "../../resposiveGlobal.css";

const Cart = () => {

  const { user } = useContext(UserContext);
  const [cart_prod, setCartProd] = useState([]);
  const [prod_id, setProd_id] = useState(0)
  const [desiredProduct, setdesireProduct] = useState([]);
  const [valortotal, setvalortotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [openmodal, setopenmodal] = useState(false);
  const [deleted, setDeleted] = useState(false)
  const [buy_modal, setBuymodal] = useState(false)
  const api_url = process.env.REACT_APP_API_URL

  useEffect(() => {
   const id = user.user.id;
    setLoading(true);

    axios
      .get(`${api_url}/produtos/get_cart/` + id)
      .then((response) => {
        setCartProd(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("erro ao fazer requisição:", error);
        setLoading(false);
      });
  }, [deleted, user?.user?.id, api_url]);

  const somar_valores = useCallback(() => {
    const valores = desiredProduct.map((prod) => prod.preco);
    setvalortotal(
      valores.reduce((acumulado, valorAtual) => acumulado + valorAtual, 0)
    );
  }, [desiredProduct]);

  useEffect(() => {
    somar_valores();
  }, [desiredProduct,somar_valores]);

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

  const delet_item = (e,prod) => {
    const user_id = user.user.id
    const id_prod = prod_id
    setDeleted(true)

    axios.delete(`${api_url}/produtos/delete/${user_id}/${id_prod}`)
    .then(() =>{
      console.log("item deletado com sucesso")
      setCartProd(prevcartprod => prevcartprod.filter(item => item.id !== id_prod))
      setopenmodal(!openmodal)
      setDeleted(false)
    }
    )
    .catch((error) => {
      console.log("erro ao fazer requisição", error)
    })
  };

  const handleModal = () => {
    setopenmodal(!openmodal);
  };

  const open_Modal = (e)=> {
    setopenmodal(true)
    setProd_id(e.target.id)
  }

  const open_buy_modal = () => {
    setBuymodal(true)

    // const description = "pagamento"
    // const payer_email = user.user.email

    // const transaction_amount = valortotal
    
    // const datas = {
    //     transaction_amount,
    //     description,
    //     payer_email
    // }
    
    // axios
    // .post("http://127.0.0.1:5000/payment/pagamento", datas)
    // .then((response) => 
    //   console.log(response.data)
    // )
    // .cathc((error) => 
    //     console.error("erro ao fazer requisição", error)
    // )

  }

  const close_buy_modal = () => {
   setBuymodal(false)
  }


  return (
    <div className="mt-4">
      <div className="bg-[#F2994B] w-[90%] h-15 rounded-full m-auto pl-10 flex">
        <div className="flex gap-2 items-center ">
          <img src={CartImage} alt="" className="w-[35px] " />
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
                    <Modal
                      className="w-[400px] h-[300px]"
                      isOpen={openmodal}
                      setCloseModal={handleModal}
                    >
                      <h2 className="font-medium text-xl">
                        Tem certeza que deseja deletar?
                      </h2>
                      <div className="h-[5rem] flex items-center justify-center gap-2">
                        <input
                          className="w-[100px] h-[50px] bg-green-600 text-black cursor-pointer"
                          onClick={(e) => delet_item(e,prod)}
                          value="Sim"
                          type="submit"
                        ></input>
                        <input
                          className="w-[100px] h-[50px] bg-red-400 text-black cursor-pointer"
                          type="submit"
                          value="Não"
                          onClick={() => handleModal()}
                        ></input>
                      </div>

                      {/* <div>{prod.id}</div> */}
                    </Modal>
                    <div className="flex w-[40%] justify-between items-center pl-5 shrink-0 box-items">
                      <input
                        type="checkbox"
                        onClick={(e) => {
                          check_prod(e, prod);
                        }}
                        className="w-[1.2rem] cursor-pointer"
                      />
                      <div className="flex ml-2 gap-3">
                        <img
                          src={prod.url}
                          alt=""
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
                      alt=""
                      id = {prod.id}
                      className="w-[30px] h-[35px] cursor-pointer mr-4 trashBin-box-items"
                      onClick={(e)=>open_Modal(e)}
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
            <h1 className="font-bold text-xl mb-5 mt-5 text-center">
              {" "}
              Pagamento{" "}
            </h1>
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

            </div>

            <button
              className="bg-[#082621] p-2 mb-3 w-full rounded-full text-white cursor-pointer opacity-80 hover:opacity-100 transition-opacity" 
              onClick= {open_buy_modal}
            >
              Comprar agora
            </button>
            <Modal isOpen={buy_modal} setCloseModal={close_buy_modal}>
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
