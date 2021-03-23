import * as React from "react";
import { useDisclosure, useToast } from "@chakra-ui/react";
import NotesList from "./notes-list";
import HeroSection from "./hero-section";
import NoteForm from "./note-form";
import NoteModal from "./note-modal";

export interface HomePageProps {
  notes: note[];
  setNotes: (note: note[]) => void;
}

export const HomePage: React.SFC<HomePageProps> = ({ notes, setNotes }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedNote, setSelectedNote] = React.useState<note>();
  const [readOnly, setReadOnly] = React.useState<boolean>(true);
  const toast = useToast();

  const handleClick = (id: string, readOnly: boolean) => {
    const selectedNote = notes.find((note: note) => note.id === id);
    setSelectedNote(selectedNote);
    setReadOnly(readOnly);
    onOpen();
  };

  const handleNoteUpdate = (newNote: note) => {
    const newNotesState: note[] = [...notes];
    const index = notes.findIndex((note: note) => note.id === newNote.id);
    newNotesState[index] = newNote;
    setNotes(newNotesState);
    showToast();
  };

  const showToast = () => {
    toast({
      title: "Note updated.",
      status: "success",
      position: "top",
      duration: 2000,
      isClosable: true
    });
  };

  return (
    <>
      {notes.length ? (
        <NotesList
          notes={notes}
          handleClick={handleClick}
          setNotes={setNotes}
        />
      ) : (
        <HeroSection />
      )}
      {isOpen ? (
        readOnly ? (
          <NoteModal
            isOpen={isOpen}
            onClose={onClose}
            selectedNote={selectedNote}
          />
        ) : (
          <NoteForm
            isOpen={isOpen}
            onClose={onClose}
            handleNoteUpdate={handleNoteUpdate}
            selectedNote={selectedNote}
          />
        )
      ) : (
        ""
      )}
    </>
  );
};
