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
  FormControl,
  FormLabel,
  Input,
  Textarea
} from "@chakra-ui/react";
import { nanoid } from "nanoid";

export interface NoteFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedNote?: note;
  handleNoteCreate?: (note: note) => void;
  handleNoteUpdate?: (note: note) => void;
}

const NoteForm: React.SFC<NoteFormProps> = ({
  isOpen,
  onClose,
  selectedNote,
  handleNoteCreate,
  handleNoteUpdate
}) => {
  const titleRef = React.useRef<HTMLInputElement>(null);
  const bodyRef = React.useRef<HTMLTextAreaElement>(null);
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  React.useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setBody(selectedNote.body);
    }
  }, []);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  const handleSave = (event: React.MouseEvent<HTMLButtonElement>) => {
    let newNote: note = {
      id: "",
      title: title,
      body: body
    };
    if (handleNoteCreate) {
      newNote.id = nanoid();
      if (handleNoteCreate) handleNoteCreate(newNote);
    } else {
      newNote.id = selectedNote ? selectedNote.id : "";
      if (handleNoteUpdate) handleNoteUpdate(newNote);
    }
    setTitle("");
    setBody("");
    onClose();
  };

  return (
    <Modal
      initialFocusRef={titleRef}
      finalFocusRef={bodyRef}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{selectedNote ? "Edit" : "Create"} a Note</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              ref={titleRef}
              value={title}
              placeholder="Title"
              onChange={event => handleTitleChange(event)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Body</FormLabel>
            <Textarea
              ref={bodyRef}
              value={body}
              placeholder="Body"
              size="sm"
              borderRadius="5px"
              onChange={event => handleNoteChange(event)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSave}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NoteForm;
