import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/home/index.jsx";
import About from "./pages/about/index.jsx";
import FicheLogement from "./pages/logement/index.jsx";
import Error from "./pages/Error/index.jsx";

function App(){

    return(
        
    <Router>
 
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<FicheLogement />} />
            <Route path="*" element={<Error />} />
        
        </Routes>
     
    </Router>
    
    )}

export default App;