import { Nav, Col, Row, Button, header , span, li} from "react-bootstrap"

const Toktok = () => {
    return (
      <header>
      <Col>
      <div className="icons">
          <a href="#icons-1">
      <span className="material-icons account">account_circle</span>
      </a>
      <a href="#icons-2">
      <span className="material-icons apps">apps</span>
      </a>
      <a href="#icons-3">
      <span className="material-icons photo">photo</span>
      </a>
      </div>
           <ul className="footer">
      <li>
  <a className="rawrr text-decoration-none justify-content-center" href="https://21cineplex.com/21profile">Profile |</a>
  </li>
  <li>
  <a className=" rawrr text-decoration-none" href="https://21cineplex.com/termofuse">Terms us |</a>
  </li>
  <li>
  <a  className=" rawrr text-decoration-none" href="https://21cineplex.com/page/page-info-iklan">Advertising |</a>
  </li>
  </ul>
  <p className="paragaph">
  © 1999-2012 21Cineplex.com. All materials and contents (texts, graphics, and every attributes) of 21Cineplex or 21Cineplex.com website are copyrights and trademarks of PT Nusantara Sejahtera Raya.
Any commercial usage of the materials and contents is forbidden without prior permission from PT Nusantara Sejahtera Raya. There is no other institutions/agencies outside
PT Nusantara Sejahtera Raya allowed to use www.21Cineplex.com (21Cineplex website) without prior permission from PT Nusantara Sejahtera Raya
  </p>
  </Col>
  <Nav>

  </Nav>
    </header>

     
    )
}


export default Toktok;