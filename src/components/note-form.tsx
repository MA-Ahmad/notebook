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
  FormErrorMessage,
  Input,
  Textarea
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

export interface NoteFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedNote?: note;
  handleNoteCreate?: (note: note) => void;
  handleNoteUpdate?: (note: note) => void;
}

type FormInputs = {
  title: string;
  body: string;
};

const NoteForm: React.SFC<NoteFormProps> = ({
  isOpen,
  onClose,
  selectedNote,
  handleNoteCreate,
  handleNoteUpdate
}) => {
  const { register, handleSubmit, formState, errors } = useForm<FormInputs>({
    mode: "onChange"
  });

  const onSubmit: SubmitHandler<FormInputs> = data => {
    let newNote: note = {
      id: "",
      title: data.title,
      body: data.body
    };
    if (handleNoteCreate) {
      newNote.id = nanoid();
      if (handleNoteCreate) handleNoteCreate(newNote);
    } else {
      newNote.id = selectedNote ? selectedNote.id : "";
      if (handleNoteUpdate) handleNoteUpdate(newNote);
    }
    onClose();
  };

  const validateTitle = (value: string) => {
    if (!value) {
      return "Title is required";
    } else return true;
  };

  const validateBody = (value: string) => {
    if (!value) {
      return "Body is required";
    } else return true;
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>{selectedNote ? "Edit" : "Create"} a Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isInvalid={!!errors?.title} isRequired>
              <FormLabel>Title</FormLabel>
              <Input
                name="title"
                placeholder="Title"
                defaultValue={selectedNote?.title}
                ref={register({ validate: validateTitle })}
              />
              <FormErrorMessage>
                {!!errors?.title && errors?.title?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl size="lg" mt={4} isInvalid={!!errors?.body} isRequired>
              <FormLabel>Body</FormLabel>
              <Textarea
                name="body"
                placeholder="Body"
                size="md"
                borderRadius="5px"
                defaultValue={selectedNote?.body}
                ref={register({ validate: validateBody })}
              />
              <FormErrorMessage>
                {!!errors?.body && errors?.body?.message}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              colorScheme="blue"
              isLoading={formState.isSubmitting}
              mr={3}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default NoteForm;
