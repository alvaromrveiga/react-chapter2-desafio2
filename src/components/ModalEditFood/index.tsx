import { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { IFood } from "../../pages/Dashboard";
import Input from "../Input";
import { Modal } from "../Modal";
import { Form } from "./styles";

interface ModalEditFoodProps {
  handleUpdateFood: (food: IFood) => void;
  setIsOpen: () => void;
  editingFood: IFood;
  isOpen: boolean;
}

export function ModalEditFood(props: ModalEditFoodProps) {
  const formRef = useRef(null);

  const handleSubmit = async (data: IFood) => {
    props.handleUpdateFood(data);
    props.setIsOpen();
  };

  return (
    <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={props.editingFood}
      >
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
