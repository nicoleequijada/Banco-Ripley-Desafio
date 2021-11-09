import './Header.css'
import { Link } from "react-router-dom"
import {Button} from 'react-bootstrap'
function Header () {
    return(
        <div className="header">
          <Link to="/"><img className="img-logo" src="https://i.postimg.cc/DzTkJ7Jp/Logo-Ripley-banco-2.png" alt="logo"/></Link> 
          <div className="options">
            <Link to="/"><Button variant="outline-warning">Nuevo Destinatario</Button>{' '}</Link>
            <Link to="/transfer"><Button variant="outline-warning">Transferir</Button>{' '}</Link>
            <Link to="/history"><Button variant="outline-warning">Historial</Button>{' '}</Link>
          </div>
          
        </div>
    )
}
export default Header