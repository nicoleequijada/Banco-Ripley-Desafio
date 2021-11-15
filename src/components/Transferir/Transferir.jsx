import { InputGroup, FormControl, Row, Col, Form, ListGroup } from 'react-bootstrap'
import {useEffect, useState} from 'react'
import './Transferir.css'
import getClients from '../../utils/getClients'
import createTransfers from '../../utils/createTransfers'

function Transferir () {
    const [getList , setGetList] = useState([])
    const [selectedClient , setSelectedClient] = useState({})
    

 const showClient = (event) => {
    event.preventDefault()
    console.log(event)
    const idSelect = document.getElementById("form-select");
    let getIdSelect = idSelect.value;
    console.log(getIdSelect)
    


    for(let i = 0 ; i < getList.length; i++){
        let idList = getList[i]._id
        if(getIdSelect === idList){
            setSelectedClient(getList[i]);
            console.log(selectedClient)
        }
    }

 }   

    useEffect(() => {
       getClients()
        .then((getList) => {
            
                setSelectedClient(getList[0])
           
            setGetList(getList)
         console.log(getList)
        })
    },[])

    const handleSubmitTrans = (event) => {
        event.preventDefault()
        console.log(event)

        const dataTransfers = {
           "name": selectedClient.name,
           "rut":selectedClient.rut,
           "email":selectedClient.email,
           "telefono": selectedClient.telefono,
           "accountNumber": selectedClient.accountNumber,
           "type": selectedClient.type,
           "bancoId": selectedClient.bancoId,
           "monto": event.target.monto.value
        }
            if(event.target.monto.value === "" || event.target.monto.value === "0"){
                alert('ingresa un monto valido')
            }
        createTransfers(dataTransfers)
    }

    return(
        <>
        <div className="bg-padre">
            <div className="div-transfers">
                <h1>TRANSFERIR</h1>
                <Form onSubmit={handleSubmitTrans}>
                <Row>
                <Col>
                <Form.Select id="form-select" onChange={showClient} aria-label="Default select example" name="nameClient">
                          {getList && getList.map((option) => {
                              return <option value={option._id}>Destinatario: {option.name} {option.bancoId} </option>
                          }
                          )}
                            </Form.Select>
                
                </Col>
                </Row>
                <Row>
                    <Col>
                    <ListGroup>
                        <ListGroup.Item>Nombre: {selectedClient.name}</ListGroup.Item>
                        <ListGroup.Item>Email: {selectedClient.email}</ListGroup.Item>
                        <ListGroup.Item>Tipo de cuenta: {selectedClient.type}</ListGroup.Item>
                        <ListGroup.Item>Numero de Cuenta: {selectedClient.accountNumber}</ListGroup.Item>
                        
                    </ListGroup>
                    </Col>
                    <Col>
                    <ListGroup.Item>Rut: {selectedClient.rut}</ListGroup.Item>
                    <ListGroup.Item> Telefono: {selectedClient.telefono}</ListGroup.Item>
                    <ListGroup.Item>{selectedClient.bancoId}</ListGroup.Item>
                    
                    </Col>
                          
                </Row>
                <Row><Col><InputGroup className="mb-3">
                    <InputGroup.Text  id="basic-addon1">Monto</InputGroup.Text>
                <FormControl
                aria-describedby="basic-addon1"
                name="monto"
                />
                </InputGroup></Col>
                </Row>
                <button type="submit" className="button-transferir" >Transferir</button>
                </Form>
                
                
        
        
        </div>
        </div>
        </>
        )
    }
    export default Transferir