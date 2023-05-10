import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/welcome';
import First from './components/first';
import Second from './components/second';
import Third from './components/third';
import Four from './components/four';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/first' element={<First/>}/>
      <Route path='/second' element={<Second/>}/>
      <Route path='/third' element={<Third/>}/>
      <Route path='/four' element={<Four/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
