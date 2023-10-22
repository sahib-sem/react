
import './index.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Create from './components/Create';

import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <div className="App">
      
      
      <Router>
        <Navbar/>
        <div className="content">

          <Routes>
            
            <Route  path='/' element = {<Home/>}/>
              

            <Route  path='/create' element = {<Create/>}/>
              
            <Route path ='/blogs/:id' element = {<BlogDetail/>}/>

          </Routes>
        
        </div>
      </Router>
      
    </div>
  );
}

export default App;
