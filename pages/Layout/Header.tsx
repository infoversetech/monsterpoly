import {useState} from 'react';
import {
  Container,
  Navbar,
  Nav,
  Button,
  Offcanvas
} from "react-bootstrap";
import Image from 'next/Image';
import Logo from "../assets/image/Logo.png";
import LogoMobile from "../assets/image/LogoMobile.png";
import Mgold from "../assets/image/mgold.svg";
import Mgold2 from "../assets/image/mpoly.svg";
import UserIcon from "../assets/image/stackCharacter.png";
import { FaIndent } from "react-icons/fa";
import Sidebar from "../Layout/Sidebar";
import { BsBoxArrowUpRight } from "react-icons/bs";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleLayout = e => {
    ReactDOM.findDOMNode(document.documentElement)
      .getElementsByClassName("wrapper")[0]
      .classList.toggle("Layoutcollapse");
  };
  return (
    <>
      <header className="header pt-1">
        <Navbar collapseOnSelect expand="lg" className="py-0">
          <Container fluid>
            <div className="sidebar-btn color-white me-3 d-none d-md-none d-lg-block">
              <FaIndent size={21} />
            </div>
            <Navbar.Brand href="#home">
              <Image
                src={Logo}
                className="img-fluid d-none d-md-none d-lg-block"
              />
              <Image
                src={LogoMobile}
                className="img-fluid d-block d-md-block d-lg-none"
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive"
              className="menu__btn d-block d-md-block d-lg-none"
              onClick={handleShow}
            >
              <span className="d-block d-md-block d-lg-none"></span>
            </Navbar.Toggle>
            <Navbar.Collapse>
              <Nav className="ms-auto align-items-center">
                <Nav.Link href="#" disabled>
                  <Image src={Mgold} className="img-fluid me-2 navcoin" />
                  9999
                </Nav.Link>
                <Nav.Link href="#" disabled>
                  <Image src={Mgold2} className="img-fluid me-2 navcoin" />
                  9999
                </Nav.Link>
                <Button className="usernav" disabled>
                  <span>0xf0aaa0000a...</span>
                  <Image src={UserIcon} className="img-fluid" />
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Body>
          <div className="mob-side-head">
            <div className="mobpropsec">
              <Image src={UserIcon} className="img-fluid profileimg" />
              <Button className="usernav">
                <span>0xf0aaa0000a...</span>
              </Button>
            </div>
            <Nav className="m-auto align-items-center justify-content-center px-1">
              <Nav.Link>
                <Image src={Mgold} className="img-fluid me-2 navcoin" />
                9999
              </Nav.Link>
              <Nav.Link>
                <Image src={Mgold2} className="img-fluid me-2 navcoin" />
                9999
              </Nav.Link>
              <Nav.Link>
                Buy MPOLY
                <BsBoxArrowUpRight className="ms-1" />
              </Nav.Link>
            </Nav>
          </div>
          <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Header;
