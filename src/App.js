import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import Login from './Components/Login';
import Home from './Components/Home';
import {Routes,Route} from 'react-router-dom';
import Signup from './Components/Register';
import ImageUpload from './Components/ImageUpload';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<Main/>}></Route>
        <Route path="/" element={<ImageUpload/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Main/>}></Route>
        
        <Route path="/register" element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
