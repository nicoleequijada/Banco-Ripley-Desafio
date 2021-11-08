import NewRecipient from "../../Views/NewRecipient.jsx";
import Transfers from "../../Views/Transfers.jsx";
import HistoryTransfer from "../../Views/HistoryTransfer.jsx";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path ="/" element={<NewRecipient/>}/>
      <Route exact path ="/transfer" element={<Transfers/>}/>
      <Route exact path ="/history" element={<HistoryTransfer/>}/>
    </Routes>
    </BrowserRouter>
  
    );
  }
  
  export default App;
  