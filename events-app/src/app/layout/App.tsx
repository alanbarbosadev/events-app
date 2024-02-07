import { Container } from "semantic-ui-react";
import NavBar from "./nav/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Home from "../../features/home/Home";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <Home />
      ) : (
        <>
          <NavBar />
          <Container className="main">
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default App;
