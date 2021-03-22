import * as React from "react";
import { useDisclosure } from "@chakra-ui/react";
import NotesList from "./notes-list";
import HeroSection from "./hero-section";
import NoteForm from "./note-form";

export interface HomePageProps {
  notes: note[];
  setNotes: (note: note[]) => void;
}

export const HomePage: React.SFC<HomePageProps> = ({ notes, setNotes }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedNote, setSelectedNote] = React.useState<note>();

  const handleClick = (id: string) => {
    const selectedNote = notes.find((note: note) => note.id === id);
    setSelectedNote(selectedNote);
    onOpen();
  };

  const handleNoteUpdate = (newNote: note) => {
    const newNotesState: note[] = [...notes];
    const index = notes.findIndex((note: note) => note.id === newNote.id);
    newNotesState[index] = newNote;
    setNotes(newNotesState);
  };

  return (
    <>
      {notes.length ? (
        <NotesList notes={notes} handleClick={handleClick} setNotes={setNotes} />
      ) : (
        <HeroSection />
      )}
      {isOpen ? (
        <NoteForm
          isOpen={isOpen}
          onClose={onClose}
          handleNoteUpdate={handleNoteUpdate}
          selectedNote={selectedNote}
        />
      ) : (
        ""
      )}
    </>
  );
};
