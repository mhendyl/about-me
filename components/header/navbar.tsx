import { Nav, Navbar, Container } from "react-bootstrap";
import Link from 'next/link'

export default function MainNavbar() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Link href="/">
          <Navbar.Brand>Home</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          <Nav.Link href="#pricing">About Me</Nav.Link>
          <Nav.Link href="#">Careers</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}