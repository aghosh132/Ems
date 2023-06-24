
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Add from './components/Add';
import View from './components/View';
import Edit from './components/Edit';
import Form1 from './components/Form1';


function App() {
  return (
    <div className="App">
      <Header/>
  <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='add' element={<Add/>}/>
        <Route path='view/:id' element={<View/>}/>
        <Route path='edit/:id' element={<Edit/>}/>
        <Route path='form' element={<Form1/>}/>
  </Routes>
    

     
    </div>
  );
}

export default App;
