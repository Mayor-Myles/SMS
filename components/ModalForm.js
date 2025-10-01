
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function ModalForm({ isOpen, onClose, title, children, onSubmit }){
  const { register, handleSubmit } = useForm();
  async function submit(data){
    await onSubmit(data);
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(submit)}>
          <ModalBody>
            {children({ register })}
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>Cancel</Button>
            <Button colorScheme="teal" type="submit">Save</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
