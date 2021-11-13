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

function BgTransfers () {
    const [listBank , setListBank] = useState([])
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target.rut.value)
        console.log(event.target.username.value)
        console.log(event.target.email.value)
        // console.log(event.target.banco.value)
        console.log(event.target.type.value)
        console.log(event.target.number.value)
        console.log(listBank)
        
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
                        <Col><Form.Select aria-label="Default select example">
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