import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/index.jsx";
import Header from "./components/header/index.jsx";
import About from "./pages/about/index.jsx";
import Footer from "./components/footer/index.jsx";


function App(){

    return(
    
<Router>
    <Header/>
<Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       
        
      </Routes>
<Footer/>
</Router>
    
    );

}
export default App;