import {Container, Row, Col ,Button, onclick} from "react-bootstrap"
const Intro = () =>
{
    return (
        <div className="intro">
        <Container className="text-white d-flex text-center justify-content-center
        align-items-center">
          <Row>
            <Col>
            <div className="iki">
            <button className="Button">Search</button>
            <input id="searchinput"type="search" placeholder="Movie, Theahters, Adventure...." name="Film dicari.." className="Input" ></input>
            </div>
            <div className="title">FILMS COMING SOON</div>
            <div className="title"> SEGERA DATANG </div>
            <div className="introButton nt-4 text-center">
            <Button variant="dark" href="#Lihat semua List" className="Semua">Lihat semua List</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro