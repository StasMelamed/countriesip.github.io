import './App.css';
import Start from './components/Start';
import Compare from './components/Compare';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryInfo from './components/CountryInfo';
import AllCountries from './components/AllCountries';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
      <Routes>

<Route path='/' element={<Start/>}/>
<Route path='/compare' element={<Compare/>}/>
<Route path='/countryinfo' element={<CountryInfo/>}/>
<Route path='/allcountries' element={<AllCountries/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
