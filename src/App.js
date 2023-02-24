import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addproduct from './Components/Addproduct';
import Delete from './Components/Delete';
import Edit from './Components/Edit';
import Navbar from './Components/Navbar';
import Tabledata from './Components/Tabledata';
import Viwe from './Components/Viwe';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Tabledata/>}/>
    <Route path='/Add' element={<Addproduct/>}/>
    <Route path='/Edit/:editTd' element={<Edit/>}/>
    <Route path='products/:productTd' element={<Viwe/>}/>
    <Route path='/:Deleteid' element={<Delete/>}/>
   </Routes>
   </>
  );
}

export default App;
