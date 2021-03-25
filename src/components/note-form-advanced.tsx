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
  FormErrorMessage,
  FormHelperText,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required()
});

type FormInputs = {
  title: string;
  body: string;
};

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
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  React.useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setBody(selectedNote.body);
    }
  }, []);

  const { register, handleSubmit, errors } = useForm<FormInputs>({
    mode: "onChange",
    // defaultValues: {
    //   title: 'tt',
    //   body: 'body'
    // },
    resolver: yupResolver(schema)
  });

  const onSubmit = (values: FormInputs) => {
    let newNote: note = {
      id: "",
      title: values.title,
      body: values.body
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

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>{selectedNote ? "Edit" : "Create"} a Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl
              isInvalid={!!errors?.title?.message}
              errortext={errors?.title?.message}
            >
              <FormLabel>Title</FormLabel>
              <Input
                name="title"
                placeholder="Title"
                defaultValue={selectedNote?.title}
                ref={register}
              />
              <FormErrorMessage>{errors?.title?.message}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={!!errors?.body?.message}
              errortext={errors?.body?.message}
              mt={4}
            >
              <FormLabel>Body</FormLabel>

              <Textarea
                name="body"
                placeholder="Body"
                size="sm"
                borderRadius="5px"
                defaultValue={selectedNote?.body}
                ref={register}
              />
              <FormErrorMessage>{errors?.body?.message}</FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              colorScheme="blue"
              mr={3}
              disabled={!!errors.title || !!errors.body}
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
