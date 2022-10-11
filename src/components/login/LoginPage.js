import { Container } from "react-bootstrap";
import Layout from "../../layout/Layout";
import Heading from "../heading/Heading";
import Login from "./Login";

function LoginPage() {
  return (
    <>
      <Layout />
      <Container>
      <Heading title="Login" />
      </Container>
      <Login />
    </>
  );
}

export default LoginPage;