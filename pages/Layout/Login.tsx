import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import WellcomeGif from "../assets/gif/wellcome.gif";
import MetaMask_Fox from "../assets/image/MetaMask_Fox.svg";
export default function Login() {
  return (
    <div className="loginpage">
      <Container fluid>
        <Row className="d-flex justify-content-center align-items-center text-center">
          <Col xs={12}>
            <Row className="d-flex justify-content-center align-items-center text-center">
              <Col xs={10} sm={5} md={3} lg={2}>
                <Image src={WellcomeGif} className="img-fluid" />
              </Col>
            </Row>
            <h1 className="color-white fw-bold fs-20 my-3">
              PLEASE, USE <Image src={MetaMask_Fox} className="img-fluid" />
              METAMASK <br /> FOR BROWSER
            </h1>
            <Button className="Logpage-btn mb-3">METAMASK</Button>
            <br />

            <Link className="Logpage-btn btn" to="/mynfts">
              WALLET CONNECT
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}