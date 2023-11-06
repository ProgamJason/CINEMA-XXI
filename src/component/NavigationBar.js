import {Navbar , Container, Navaws } from "react-bootstrap" 
const NavigationBar = () => {
    return (
        <div>
      <Navbar variant="dark">
        <Container >
          <div className="Icons">
        <span className="material-icons home" href="#HOME">home</span>
        </div>
            <Navbar.Brand className="Nav" href="#CINEMA XXI">CINEMA XXI</Navbar.Brand>
        <Nav className="Nav">
            <Nav.Link className="text-decoration-underline"  href="#Trending">TRENDING</Nav.Link>
            <Nav.Link className="text-decoration-underline" href="#Adventure">ADVENTURE</Nav.Link>
            <Nav.Link className="text-decoration-underline" href="#MOVIE FILMS">MOVIE FILMS</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      </div>
    )
}

export default NavigationBar