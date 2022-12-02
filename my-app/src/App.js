import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/*' element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
