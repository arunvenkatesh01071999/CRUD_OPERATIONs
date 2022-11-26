import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Edit } from './Components/Edit';
import { Details } from './Components/Sms';
import { Students } from './Components/Student';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
              <Route path='/' element={<Students/>}/>
              <Route path='/details' element={<Details/>}/>
              
              <Route path='/edit' element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;