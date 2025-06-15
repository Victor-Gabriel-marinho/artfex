import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../context";
import { AiOutlineLoading } from "react-icons/ai";
import "../resposiveGlobal.css";

export default function CatalogComponent(className="") {
  const [produtos, setprodutos] = useState([]);
  const [modalproduto, setModalProduto] = useState([null]);
  const [seller, setseller] = useState([null]);
  const user = useContext(UserContext)
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState(false)
  const [produto_adicionado, setProdutoAdicionado] = useState(false);
  const api_url = process.env.REACT_APP_API_URL

  useEffect(() => {
    const body = document.body;
    if (openModal) {
      body.classList.add("overflow-y-hidden");
    } else {
      body.classList.remove("overflow-y-hidden");
    }
  }, [openModal]);

  useEffect(() => {
    setLoading(true)
    const user_id = user.user.user.id

    axios
      .get(`${api_url}/produtos/get_produtos/`+user_id)
      .then((Response) => {
        setprodutos(Response.data);
        setLoading(false)
      })
      .catch((Error) => {
        setLoading(false)
        setErro(true)
        console.log("erro ao fazer requisição");
      });
  }, [user?.user?.user?.id, api_url]);

  const get_modal = (produto) => {
    setOpenModal(true);

    setModalProduto(produto);

    const id = produto.id_usuario;

    axios
      .get(`${api_url}/produtos/get_user/` + id)
      .then((Response) => {
        setseller(Response.data);
      })
      .catch((Error) => {
        console.log("erro ao fazer requisição", Error);
      });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setProdutoAdicionado(false)
    setErro(false)
  };

  const add_to_cart = () => {
    const id_user = user.user.user.id
    const id_product = modalproduto.id;

    axios
      .post(
        `${api_url}/produtos/insert_product_cart/${id_product}/${id_user}`
      )
      .then((Response) => {
        console.log("Produto adicionado ao carrinho com sucesso", Response.data);
        setProdutoAdicionado(true);
      })
      .catch((error) => {
        console.error("erro ao adicionar produto no carrinho", error);
        setErro(true)
      });
  };

  return (
    <div>
      {loading ? (
        (
        <div className="bg-white w-full max-w-[1300px] m-auto rounded-xl mt-[-250px] p-4 shadow-2xl">
          <div className="w-full h-full flex items-center justify-center">
              <AiOutlineLoading className="text-8xl text-gray-400 animate-spin" />
          </div>
        </div>
        )
      ) : produtos ? 
      (
        <section className="bg-white w-full max-w-[1300px] m-auto rounded-xl mt-[-250px] p-4 shadow-2xl">
        <form className="relative">
          <div className="bg-[url('./images/lupa.png')] bg-cover w-[20px] h-[20px] absolute left-40 top-6.5 item-search"></div>
          <input
            className="bg-[#567] rounded-3xl ml-[9em] mt-[1em] mb-[1.5em] p-2 outline-none placeholder-white text-center text-white input-search"
            type="text"
            placeholder="Pesquisar item"
          />
        </form>

        <div className="flex flex-wrap gap-10 justify-center cursor-pointer box-catalog">
          {produtos.map((produto) => (
            <div
              onClick={() => {
                get_modal(produto);
              }}
              key={produto.id}
              className="w-[300px] h-[350px] box-items-catalog"
            >
              <img
                src={produto.url}
                className=" w-full h-full max-h-[300px] bg-cover rounded-xl image-item-catalog"
                alt=""
              />
              <div className="flex justify-between pl-2 pr-2 pt-1 description-catalog">
                <span className="text-gray-500 font ">Categoria</span>
                <span className="text-[#F2994B] font-bold font-[Poppins]">
                  R${produto.preco},00
                </span>
              </div>
              <p className="font-bold font-[Poppins] pl-2 name-item">{produto.nome}</p>
            </div>
          ))}
        </div>

        <Modal isOpen={openModal} setCloseModal={handleCloseModal} className={`${className} modal-catalog`}>
          <div className="flex justify-center items-center box-modal-catalog">
            {/* imagem */}
            <img
              className="w-[270px] h-[290px] bg-cover rounded-xl mr-[2em] teste"
              src={modalproduto.url}
              alt=""
            />

            {/* descrição da imagem */}
            <div className="w-full max-w-[300px] flex flex-col gap-3">
              <span className="text-gray-500 font">Categoria</span>
              <p className="font-[Poppins] pl-2 font-medium text-2xl">
                {modalproduto.nome}
              </p>
              <span className="text-[#F2994B] text-xl font-bold font-[Poppins] ">
                R${modalproduto.preco},00
              </span>
              <div className="flex">
                <div className="bg-gray-300 w-[30px] h-[30px] rounded-full"></div>
                <p className="font-[Poppins] pl-2 font-normal">{seller.nome}</p>
              </div>
              <p className="text-gray-500 font w-[350px] m-auto">{modalproduto.descricao}</p>

              <div className="flex justify-between gap-2 w-[330px]">
                {produto_adicionado ? (
                  <div>
                    <p className="bg-[#F2994B] rounded-2xl text-l text-white text-center cursor-pointer"
                       onClick={handleCloseModal}
                    >
                      Produto adicionado ao seu carrinho.
                    </p>
                  </div>
                ) : erro ? (
                    <p className="bg-red-500 text-white rounded-2xl text-l text-center p-1 cursor-pointer"
                       onClick={handleCloseModal} 
                    >
                      Produto já adicionado ao carrinho.
                    </p>
                ) : (
                  <button
                    className="bg-[#082621] p-1 w-full rounded-2xl text-white cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
                    onClick={add_to_cart}
                  >
                    adicionar ao carrinho
                  </button>
                )}

                <button className="bg-[#F2994B] p-1 w-full rounded-2xl text-white cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                  comprar agora
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </section>
      ) : erro ? (
        <div className="bg-white w-full max-w-[1300px] m-auto rounded-xl mt-[-250px] p-4 shadow-2xl">
            <p>Deu erro :/</p>
        </div>
      ) : ""
     }
    </div>
  );
}
