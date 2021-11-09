import './Header.css'
import { Link } from "react-router-dom"
import {Button} from 'react-bootstrap'
function Header () {
    return(
        <div className="header">
          <Link to="/"><img className="img-logo" src="https://i.postimg.cc/DzTkJ7Jp/Logo-Ripley-banco-2.png" alt="logo"/></Link> 
          <Button variant="outline-primary">Nuevo Destinatario</Button>{' '}
          <Button variant="outline-primary">Transferir</Button>{' '}
          <Button variant="outline-primary">Historial</Button>{' '}
        </div>
    )
}
export default Header