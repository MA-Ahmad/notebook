import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { TopNav } from "./components/top-nav";
import { PageFooter } from "./components/page-footer";
import RepositoriesList from "./components/repositories-list";
import { HomePage } from "./components/home-page";
import { RouteComponentProps, withRouter } from "react-router";

type AppComponentProps = RouteComponentProps;

const App: React.FC<AppComponentProps> = ({ history }) => {
  const [notes, setNotes] = React.useState<note[]>([]);

  React.useEffect(() => {
    const dummyNotes = [
      {
        id: "Odork5n5jPVd0wvm0w_dY",
        title: "Hey 👋",
        body:
          "I'm dummy note here. Try to update me. Click me to see my remaining part. You can also delete me 😔. But I'll be here again by reopening the app link 😃. "
      }
    ];
    setNotes(dummyNotes);
  }, []);

  const handleNoteCreate = (note: note) => {
    const newNotesState: note[] = [...notes];
    newNotesState.push(note);
    setNotes(newNotesState);
    if (history.location.pathname !== "/") history.push("/");
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" p={5}>
        <TopNav handleNoteCreate={handleNoteCreate} />
        <Switch>
          <Route exact path="/projects" component={RepositoriesList} />
          <Route
            exact
            path="/"
            component={() => <HomePage notes={notes} setNotes={setNotes} />}
          />
          <Redirect to="/" />
        </Switch>
        <PageFooter />
      </Box>
    </ChakraProvider>
  );
};

export default withRouter(App);
