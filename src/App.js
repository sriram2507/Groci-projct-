import './App.css';
import Header from './Components/Header.jsx';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home.jsx';
import Vegtables from './Pages/Vegtables.jsx';
import Fruit from './Pages/Fruit.jsx';
import Dairy from './Pages/Dairy.jsx';
import Beverages from './Pages/Beverages';
import Icecream from './Pages/Icecream';
import Foodgrains from './Pages/Foodgrains';
import Egg from './Pages/Egg';
import OrderedItems from './Pages/OrderedItems.jsx';
import Footer from './Components/Footer';
// import Login from './Components/login.jsx';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header/>
    {/* <Login/> */}
    <Sidebar>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/Beverages' element={<Beverages/>}/>
      <Route path="/Dairy" element={<Dairy/>}/> 
      <Route path="/Egg" element={<Egg/>}/>
      <Route path="/Foodgrains" element={<Foodgrains/>}/>
      <Route path="/Fruit" element={<Fruit/>}/>
      <Route path='/Icecream' element={<Icecream/>}/>
      
      <Route path="/Vegtables" element={<Vegtables/>}/>
      
      <Route path="/OrderedItems" element={<OrderedItems/>}/>
    </Routes>
    </Sidebar>
    {/* <Home/> */}
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
