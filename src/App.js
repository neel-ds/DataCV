import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import Login from './Components/Login';
import {Routes,Route} from 'react-router-dom';
import Signup from './Components/Register';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<Main/>}></Route>
        
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Signup/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
