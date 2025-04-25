import Modal from "../components/Modal";
import { useEffect, useState } from "react";
import axios from "axios"


export default function CatalogComponent() {

    const [produtos, setprodutos] = useState([])
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

      const getId = () => {
        setOpenModal(true);
      }
      const fecharmodal = () =>{
        console.log("clicou")
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
          onClick={getId}
          className="flex flex-wrap gap-10 justify-center cursor-pointer"
        >
          {produtos.map((produtos) => (
            <div className="w-[300px] h-[350px]" key={produtos.id}>

            {/* Modal */}
              <Modal onClick={getId} isOpen={openModal} onClose={fecharmodal}  />

              <img
                src={produtos.url}
                className=" w-full h-full max-h-[300px] bg-cover rounded-xl"
              />
              <div className="flex justify-between pl-2 pr-2 pt-1">
                <span className="text-gray-500 font">Categoria</span>
                <span className="text-[#F2994B] font-bold font-[Poppins]">
                  R$100,00
                </span>
              </div>
              <p className="font-bold font-[Poppins] pl-2">{produtos.nome}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
