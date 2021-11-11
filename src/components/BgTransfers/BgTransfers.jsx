import {
    InputGroup, 
    FormControl, 
    Container, 
    Col, 
    Row
} from 'react-bootstrap'
import CreateModal from '../Modal/CreateModal'
import './BgTransfers.css'

function BgTransfers () {
    return(
        <>
        <div className="bg-padre">
            <div className="div-transfers">
                <h1>NUEVO DESTINATARIO</h1>
                <Container>
                    <Row>
                        <Col> <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Rut</InputGroup.Text>
                                 <FormControl
                                     aria-describedby="basic-addon1"
                                 />
                                 </InputGroup>
                        </Col>
                        <Col><InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
                                 <FormControl
                                     aria-describedby="basic-addon1"
                                 />
                                 </InputGroup></Col>
                    </Row>
                    <Row>
                        <Col> <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Correo</InputGroup.Text>
                                 <FormControl
                                     aria-describedby="basic-addon1"
                                 />
                                 </InputGroup>
                        </Col>
                        <Col><InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Banco</InputGroup.Text>
                                 <FormControl
                                     aria-describedby="basic-addon1"
                                 />
                                 </InputGroup></Col>
                    </Row>
                    <Row>
                        <Col> <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Tipo de cuenta</InputGroup.Text>
                                 <FormControl
                                     aria-describedby="basic-addon1"
                                 />
                                 </InputGroup>
                        </Col>
                        <Col><InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Numero de cuenta</InputGroup.Text>
                                 <FormControl
                                     aria-describedby="basic-addon1"
                                 />
                                 </InputGroup></Col>
                    </Row>
                    
                </Container>
                <CreateModal />
            </div>
            
        </div>
        </>
    )
}

export default BgTransfers