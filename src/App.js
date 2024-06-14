import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UseContext from './UseContext';
import UseReducer from './UseReducer/Message';
import Workspace from './Workspace/Workspace';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Workspace />} />
        <Route path='usecontext' element={<UseContext />} />
        <Route path='usereducer' element={<UseReducer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


//https://react.dev/learn