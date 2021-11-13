import { InputGroup, FormControl, Row, Col } from 'react-bootstrap'
import './Transferir.css'
function Transferir () {
    return(
        <>
        <div className="bg-padre">
            <div className="div-transfers">
                <h1>Transferir</h1>
                <Row>
                <Col>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Buscar Destinatario</InputGroup.Text>
                <FormControl
                aria-describedby="basic-addon1"
                />
                </InputGroup>
                </Col>
                <Col>
                </Col>
                </Row>
                
        
        
        </div>
        
        </div>
        </>
        )
    }
    export default Transferir