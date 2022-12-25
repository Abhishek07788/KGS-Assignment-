import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCourseAction } from "../../Redux/course/course.action";
const ModalForEdit = ({ isOpen, setIsOpen, editData, handleShowData }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  // ----------------- (Update) -----------
  const handleSubmit = () => {
    if (value) {
      dispatch(updateCourseAction(editData.id, { [editData.name]: value }));
      toast({
        title: `New ${editData.name} updated.👍`,
        status: "success",
        duration: 2500,
        isClosable: true,
        position: "top",
      });
      setIsOpen(false);
      setTimeout(()=>{
      handleShowData()
      },2)
    } else {
      toast({
        title: "Please Enter Something!!",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent pb="4" bg="#f3f7fd" mt="40"  w="50%">
          <ModalHeader>Edit {editData.name}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Textarea
              borderBottom={"2px"}
              bg="#e6defa"
              color="black"
              fontSize={20}
              placeholder={`Enter the ${editData.name}...`}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button mt="8" w="100%" bg="teal" onClick={handleSubmit}>
              Edit
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalForEdit;
