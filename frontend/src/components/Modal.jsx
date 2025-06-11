const bgStyle = "fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] z-70";
const modalStyle = "fixed top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] w-[45em] h-[25em] bg-white rounded-xl flex justify-center items-center"

export default function Modal({ className='', isOpen, setCloseModal, children }) {
  if (!isOpen) return null;

    return (
      <div className={bgStyle}>
        <div className={`${modalStyle} ${className}`}>

          <div>
            {children}
          </div>

          <div className="relative">
            <button onClick={() => setCloseModal()} className="cursor-pointer text-black text-white font-bold rounded-full bg-red-500 w-[30px] h-[30px] absolute top-[-8em]"> X </button>
          </div>
        </div>
      </div>
    );
}
