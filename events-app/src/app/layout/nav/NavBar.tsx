import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

type Props = {
  handleCreateFormOpen: (value: boolean) => void;
};

export default function NavBar({ handleCreateFormOpen }: Props) {
  return (
    <>
      <Menu inverted={true} fixed="top">
        <Container>
          <MenuItem header>
            <img src="logo.png" alt="logo" /> EventsApp
          </MenuItem>
          <MenuItem name="Events" />
          <MenuItem>
            <Button
              floated="right"
              positive={true}
              inverted={true}
              content="Create Event"
              onClick={() => handleCreateFormOpen(true)}
            />
          </MenuItem>
          <MenuItem position="right">
            <Button basic inverted content="Login" />
            <Button
              basic
              inverted
              content="Register"
              style={{ marginLeft: "0.5em" }}
            />
          </MenuItem>
        </Container>
      </Menu>
    </>
  );
}
