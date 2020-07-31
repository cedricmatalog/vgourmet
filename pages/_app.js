import "../styles/globals.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  const { Brand, Toggle, Collapse } = Navbar;

  return (
    <div className={styles.home}>
      <Navbar bg="light" expand="lg">
        <Container>
          <Brand href="#home">V Gourmet</Brand>
          <Toggle aria-controls="basic-navbar-nav" />
          <Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link href="/">
                <Nav.Link href="#home">Home</Nav.Link>
              </Link>
              <Link href="/about_us">
                <Nav.Link href="#link">About us</Nav.Link>
              </Link>

              <Link href="/products">
                <Nav.Link href="#link">Products</Nav.Link>
              </Link>

              <Link href="/contact_us">
                <Nav.Link href="#link">Contact us</Nav.Link>
              </Link>

              <Link href="/testimonials">
                <Nav.Link href="#link">Testimonials</Nav.Link>
              </Link>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Container className="flex-grow-1 d-flex align-items-center">
        <Component {...pageProps} />
      </Container>
    </div>
  );
}

export default MyApp;
