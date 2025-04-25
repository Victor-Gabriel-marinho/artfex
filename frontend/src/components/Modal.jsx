import { useEffect } from "react";

export default function Modal({isOpen, onClose}) {
    if (!isOpen) return null;
  const bgStyle =
    "fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.2)] z-50";
  const modalStyle =
    "fixed top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] w-[600px] h-[400px] bg-white rounded-xl";

  return (
    <div className={bgStyle}>
      <div className={modalStyle}>
        <div className="bg-blue-600 w-[200px] h-[150px] rounded-xl"> img </div>
        <button className="cursor-pointer p-2 text-white"
        onClick={onClose}
        >
        </button>
      </div>
    </div>
  );

}
