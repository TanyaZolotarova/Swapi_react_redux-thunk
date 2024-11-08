import Form from "react-bootstrap/Form";
import {Col, InputGroup, Row} from "react-bootstrap";
import {BtnComponent} from "./BtnComponent";

export function FormInputComponent({value, onChange, onClick}) {
    return (
        <Form>
            <Row className="align-items-center justify-content-center">
                <Col>
                    <InputGroup>
                        <InputGroup.Text>https://swapi.dev/api/</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="people/1"
                            value={value}
                            onChange={onChange}
                        />
                    </InputGroup>
                </Col>
                <Col xs="auto">
                    <BtnComponent text={'Request'} onClick={onClick}/>
                </Col>
            </Row>
        </Form>
    )
}

