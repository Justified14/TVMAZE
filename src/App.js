import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavHead from './Components/Navhead';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <>
     <NavHead/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/Search' element={<Search/>} />
     </Routes>
    </>
  );
}

export default App;
