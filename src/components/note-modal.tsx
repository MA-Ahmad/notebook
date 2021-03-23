import * as React from "react";
import {
  Button,
  ModalContent,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";

export interface NoteFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedNote?: note;
}

const NoteModal: React.SFC<NoteFormProps> = ({
  isOpen,
  onClose,
  selectedNote
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior={"inside"}
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader isTruncated paddingRight="10">{selectedNote?.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>{selectedNote?.body}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NoteModal;
