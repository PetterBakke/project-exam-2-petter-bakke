import Heading from "../heading/Heading";
import DashBoardMenu from "./DashboardMenu";
import { Container } from "react-bootstrap";

function DashboardPage({children}) {
  return (
    <>
    <Container>
      <Heading title="Dashboard" />
      <DashBoardMenu />
      {children ? children : <p>Select a section</p>}
    </Container>
    </>
  );
}
export default DashboardPage;