import * as React from "react";
import {
  ModalContent,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence>
      <motion.div layoutId={selectedNote?.id}>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          scrollBehavior={"inside"}
          isCentered
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <motion.div>
              <ModalHeader isTruncated paddingRight="10">
                {selectedNote?.title}
              </ModalHeader>
            </motion.div>
            <ModalCloseButton />
            <motion.div>
              <ModalBody pb={6}>{selectedNote?.body}</ModalBody>
            </motion.div>
          </ModalContent>
        </Modal>
      </motion.div>
    </AnimatePresence>
  );
};

export default NoteModal;
