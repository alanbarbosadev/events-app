import { NavLink } from "react-router-dom";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import SignedOutButtons from "./SignedOutButtons";
import SignedInMenu from "./SignedInMenu";
import { useState } from "react";

export default function NavBar() {
  const [auth, setAuth] = useState(true);

  return (
    <>
      <Menu inverted={true} fixed="top">
        <Container>
          <MenuItem header as={NavLink} to="/">
            <img src="logo.png" alt="logo" /> EventsApp
          </MenuItem>
          <MenuItem name="Events" as={NavLink} to="/events" />
          <MenuItem name="Scratch" as={NavLink} to="/scratch" />
          <MenuItem>
            <Button
              floated="right"
              positive={true}
              inverted={true}
              content="Create Event"
              as={NavLink}
              to="/createEvent"
            />
          </MenuItem>
          {auth ? (
            <SignedInMenu setAuth={setAuth} />
          ) : (
            <SignedOutButtons setAuth={setAuth} />
          )}
        </Container>
      </Menu>
    </>
  );
}
