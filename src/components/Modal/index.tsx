import { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";

interface ModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
}

function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function Modal({ isOpen, children, setIsOpen }: ModalProps) {
  const [modalStatus, setModalStatus] = useState(isOpen);

  const prevIsOpen = usePrevious(isOpen);
  useEffect(() => {
    if (prevIsOpen !== isOpen) {
      setModalStatus(isOpen);
    }
  }, [prevIsOpen, isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#F0F0F5",
          color: "#000000",
          borderRadius: "8px",
          width: "736px",
          border: "none",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      {children}
    </ReactModal>
  );
}
