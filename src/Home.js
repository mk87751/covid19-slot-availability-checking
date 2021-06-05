import React, { useState } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
} from "reactstrap";
import { Link } from "react-router-dom";
function Home(props) {
  const [rSelected, setRSelected] = useState(null);
  const [date, setDate] = useState(null);
  const [pin, setPin] = useState(null);
  const [minAge, setMinAge] = useState(null);
  console.log("date:", date, "Pin:", pin, "minAge:", minAge);
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">
            <h1>CoWIN Vaccination Slot Availablility</h1>
          </Label>
          <div style={{ color: "blue" }}>
            "The CoWIN APIs are geo-fenced so sometimes you may not see an
            output! Please try after sometime"
          </div>
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="exampleNumber1">Date Range</Label>
          <Input
            onChange={() => setDate}
            type="number"
            name="number"
            id="exampleNumber1"
            placeholder="Enter Range"
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="exampleNumber2">PIN Code</Label>
          <Input
            onChange={() => setPin}
            type="number"
            name="number"
            id="exampleNumber2"
            placeholder="Enter PIN"
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Label for="exampleNumber3">Minimum Age</Label>
          <Input
            onChange={() => setMinAge}
            type="number"
            name="number"
            id="exampleNumber3"
            placeholder="Enter Age"
          />
        </FormGroup>
        <br />
        <FormGroup>
          <ButtonGroup>
            <Button
              style={{ background: "white", color: "black" }}
              onClick={() => setRSelected(1)}
              active={rSelected === 1}
            >
              Free
            </Button>
            <Button
              style={{ background: "white", color: "black" }}
              onClick={() => setRSelected(2)}
              active={rSelected === 2}
            >
              paid
            </Button>
          </ButtonGroup>
        </FormGroup>
        <br />
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Availability
          </Label>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Link to={`/Details?pincode=${pin}&date=${date}`}>
              <Button>Submit</Button>
            </Link>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Home;
