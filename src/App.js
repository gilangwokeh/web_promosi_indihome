import { Routes,Route } from 'react-router-dom';
import Bogor from './pages/Bogor';
import Home from './pages/Home';
import SukaBumi from './pages/SukaBumi';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sukabumi' element={<SukaBumi/>}/>
        <Route path='/bogor' element={<Bogor/>}/>
      </Routes>
    </>
  );
}

export default App;
