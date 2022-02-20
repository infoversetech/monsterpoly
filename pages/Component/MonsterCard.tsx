import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
export default function MonsterCard(props) {
  return (
    <div>
      <div className="mostercards">
        <Card className="m-0">
          <Card.Body className="d-flex justify-content-center align-items-center">
            <div className="text-center py-5">
              <Card.Title className="mb-3 color-white fs-16 text-uppercase">
                {props.Title}
              </Card.Title>
              <Button variant="primary" className="start-training">
                Select
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}