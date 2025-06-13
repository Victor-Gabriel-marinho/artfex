import '../animation.css';
const Carousel = () => {
  return (


    <div className="w-[700px] overflow-hidden m-auto" id="container-carrossel">
      <section className="flex justify-between items-center flex-nowrap w-[1500px] h-100 m-auto mt-5 relative" id="carrossel">
        <div className="bg-[#F2994B] p-[10px] w-[350px] h-[240px] rounded-xl m-auto relative">
          <div className="bg-[url('./images/mulher3.png')] bg-cover  h-[100px] w-[100px] absolute rounded-[100%]"></div>
          <h3 className="text-white text-center text-2xl mt-[40px]">
            Marlúcia
          </h3>
          <p className="text-white  m-auto mt-8">
            Uma ideia legal, trazer uma dificuldade maior e ampliar as vendas.
          </p>
        </div>
        
        <div className="bg-[#F2994B] p-[10px] w-[350px] h-[240px] rounded-xl m-auto relative">
          <div className="bg-[url('./images/mulher2.png')] bg-cover  h-[100px] w-[100px] absolute rounded-[100%]"></div>
          <h3 className="text-white text-center text-2xl mt-[40px]">
            Flaviana
          </h3>
          <p className="text-white m-auto mt-8">
            A opinião quando ao projeto é que seria uma benção, seria muito bom
            por trazer visibilidade ao trabalho.
          </p>
        </div>

        <div className="bg-[#F2994B] p-[10px] w-[350px] h-[240px] rounded-xl m-auto relative">
          <div className="bg-[url('./images/homem.png')] bg-cover  h-[100px] w-[100px] absolute rounded-[100%]"></div>
          <h3 className="text-white text-center text-2xl mt-[40px]">
            Nazareno
          </h3>
          <p className="text-white m-auto mt-8">
            Importante, a arte está aos poucos acabando e a educação deveria
            trazer para os mais novos essa abordagem para não acarretar seu
            fim.Interessante por trazer visibilidade{" "}
          </p>
        </div>
        <div className="bg-[#F2994B] p-[10px] w-[350px] h-[240px] rounded-xl m-auto">
          <div className="bg-[url('./images/mulher1.png')] bg-cover h-[100px] w-[100px] absolute rounded-[100%]"></div>
          <h3 className="text-white text-center text-2xl mt-[40px] ml-16">
            Olinda Rendeira
          </h3>
          <p className="text-white w-[90%] m-auto mt-8">
            Um projeto deveria ser feito para trazer o interesse e a cultura não
            morrer. Um projeto louvável pra trazer visibilidade, seria a chave,
            a questão das redes seria bem essencial..
          </p>
        </div>
      </section>
    </div>
  )
}
export default Carousel;