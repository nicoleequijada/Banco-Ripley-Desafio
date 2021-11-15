import { Col, ListGroup, Row, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import './History.css'
import getTransfers from '../../utils/getTransfers'


function History () {
    const [selectedClient , setSelectedClient] = useState([{}])

    useEffect(() => {
        getTransfers()
        .then((selectedClient) => {
        setSelectedClient(selectedClient)
         console.log(selectedClient)
        })
    },[])


    return(
        <>
        <div className="div-init">
            <div className="div-history">
                <Row>
                    <h1>HISTORIAL DE TRANSFERENCIAS</h1>
                </Row>
                <Form>
                <Row>
                    <Col>
        
                        <ListGroup>
                            {selectedClient && selectedClient.map((option) => { 
                                return <ListGroup.Item value={option.name}>Nombre: {option.name} Banco: {option.bancoId} Monto: {option.monto}</ListGroup.Item>
                            })}
                        </ListGroup>
                    </Col>
                </Row>
                </Form>
            </div>
        </div>
        </>
    )
}
export default History