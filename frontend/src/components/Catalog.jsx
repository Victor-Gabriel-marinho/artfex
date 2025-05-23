import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import axios from "axios"


export default function CatalogComponent() {

    const [produtos, setprodutos] = useState([])
    const [modalproduto, setModalProduto] = useState([])
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        const body = document.body;
        if (openModal) {
          body.classList.add("overflow-y-hidden");
        } else {
          body.classList.remove("overflow-y-hidden");
        }
      }, [openModal]);

    useEffect(() => {
        axios
        .get('http://127.0.0.1:5000/produtos/produtos')
        .then(Response => {
          setprodutos(Response.data)
          console.log(Response.data)
        }).catch(Error => {
          console.log("erro ao fazer requisição")
        })
      }, [])

      const get_modal= (produto) => {
        setOpenModal(true);

        setModalProduto(produto);
        console.log(produto)  
        
        const id = produto.id_usuario

        axios
        .get('http://127.0.0.1:5000/produtos/get_user/', {params: {id}})  
        .then((Response) => {
          console.log(Response.data)
        })
        .catch((Error) => {
          console.log("erro ao fazer requisição")
        })

      }

      const handleCloseModal = () => {
        setOpenModal(false);
      }


  return (
    <div>
      <section className="bg-white w-full max-w-[1300px] m-auto rounded-xl mt-[-250px] p-4 shadow-2xl">
        <form className="relative">
          <div className="bg-[url('./images/lupa.png')] bg-cover w-[20px] h-[20px] absolute left-40 top-6.5"></div>
          <input
            className="bg-[#567] rounded-3xl ml-[9em] mt-[1em] mb-[1.5em] p-2 outline-none placeholder-white text-center text-white"
            type="text"
            placeholder="Pesquisar item"
          />
        </form>

        <div
          className="flex flex-wrap gap-10 justify-center cursor-pointer"
        >
          {produtos.map((produto) => (
            <div onClick={() => {get_modal(produto)}} key={produto.id} className="w-[300px] h-[350px]">

              <img
                src={produto.url}
                className=" w-full h-full max-h-[300px] bg-cover rounded-xl"
              />
              <div className="flex justify-between pl-2 pr-2 pt-1">
                <span className="text-gray-500 font">Categoria</span>
                <span className="text-[#F2994B] font-bold font-[Poppins]">
                  R${produto.preco},00
                </span>
              </div>
              <p className="font-bold font-[Poppins] pl-2">{produto.nome}</p>
            </div>
          ))}
        </div>

        <Modal isOpen={openModal} setCloseModal={handleCloseModal}>
            <div className="flex justify-center items-center">
              {/* imagem */}
              <img className="w-[270px] h-[290px] bg-cover rounded-xl mr-[2em]" src={modalproduto.url} alt="" />

              {/* descrição da imagem */}
              <div className="w-full max-w-[300px] flex flex-col gap-3"> 
                <span className="text-gray-500 font">Categoria</span>
                <p className="font-[Poppins] pl-2 font-medium text-2xl">{modalproduto.nome}</p>
                <span className="text-[#F2994B] text-xl font-bold font-[Poppins] ">R${modalproduto.preco},00</span> 
                <div className="flex">
                  <div className="bg-gray-300 w-[30px] h-[30px] rounded-full"></div>
                  <p className="font-[Poppins] pl-2 font-normal">Name</p>
                </div>
                <p className="text-gray-500 font">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nesciunt id unde amet, omnis eaque illo temporibus vel debitis laudantium rerum? Lorem</p>

                <div className="flex justify-between gap-2 w-[330px]">
                  <button className="bg-[#082621] p-1 w-full rounded-2xl text-white cursor-pointer opacity-80 hover:opacity-100 transition-opacity">adicionar ao carrinho</button>
                  <button className="bg-[#F2994B] p-1 w-full rounded-2xl text-white cursor-pointer opacity-80 hover:opacity-100 transition-opacity">comprar agora</button>
                </div>
              </div>
            </div>
        </Modal>
      </section>
    </div>
  );
}
