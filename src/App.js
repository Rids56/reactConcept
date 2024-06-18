import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UseContext from './UseContext';
import UseReducer from './UseReducer/Message';
import Workspace from './Workspace/Workspace';
import Redux from './Redux/reduxMain';
import Counter from './Redux/Counter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Workspace />} />
        <Route path='usecontext' element={<UseContext />} />
        <Route path='usereducer' element={<UseReducer />} />
        <Route path='redux' element={<Redux />} />
        <Route path='counter' element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


//https://react.dev/learn