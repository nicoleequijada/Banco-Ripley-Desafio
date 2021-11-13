import {
    InputGroup, 
    FormControl, 
    Container, 
    Col, 
    Row,
    Form,
    ListGroup
} from 'react-bootstrap'
import CreateModal from '../Modal/CreateModal'
import './BgTransfers.css'
import {useEffect, useState} from 'react'
import getBankList from '../../utils/bankClient'
import postRecipient from '../../utils/backendClient'

function BgTransfers () {
    const [listBank , setListBank] = useState([])
    const handleSubmit = (event) => {
        event.preventDefault()
       const recipient = {
            "rut": event.target.rut.value,
            "name": event.target.username.value,
            "email": event.target.email.value,
            "bancoId": event.target.banco.value,
            "type": event.target.type.value,
            "accountNumber": event.target.number.value
 
        }
        postRecipient(recipient) 
    }

    

    useEffect(() => {
        getBankList()
        .then((listBank) => {
            setListBank(listBank.banks)
         console.log(listBank)
        })
    },[])
    return(
        <>
        <div className="bg-pather">
            <div className="div-transf">
                <h1>NUEVO DESTINATARIO</h1>
                <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col> <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Rut</InputGroup.Text>
                                 <FormControl
                                     aria-describedby="basic-addon1"
                                     type="text"
                                     name="rut"
                                   
                                 />
                                 </InputGroup>
                        </Col>  
                        <Col><InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
                                 <FormControl
                                     aria-describedby="basic-addon1"
                                     type="text"
                                     name="username"
                                 
                                     
                                    
                                 />
                                 </InputGroup></Col>
                    </Row>
                    <Row>
                        <Col><InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Correo</InputGroup.Text>
                                 <FormControl
                                     aria-describedby="basic-addon1"
                                     type="text"
                                     name="email"
                                 
                                    
                                     
                                 />
                                 </InputGroup>
                                
                        </Col>
                        <Col><Form.Select aria-label="Default select example" name="banco">
                          {listBank && listBank.map((option) => {
                              return <option value={option.id}>{option.name}</option>
                          }
                          )}
                        
                            </Form.Select></Col>
                    </Row>
                    <Row>
                        <Col> <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">Tipo de cuenta</InputGroup.Text>
                                 <FormControl
                                     aria-describedby="basic-addon1"
                                     type="text"
                                     name="type"
                        
                                 />
                                 </InputGroup>
                        </Col>
                        <Col><InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">N de cuenta</InputGroup.Text>
                                 <FormControl
                                     aria-describedby="basic-addon1"
                                     type="text"
                                     name="number"
                                 />
                                 </InputGroup></Col>
                    </Row>
                    <button type="submit">Login</button>
                    </Form>
                </Container>
                
                <CreateModal />
            </div>
            
        </div>
        </>
    )
}

export default BgTransfers