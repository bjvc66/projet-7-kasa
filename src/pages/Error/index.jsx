import React from "react";
import ErrorPage from "../../components/error.jsx";

import Header from "../../layout/header.jsx";

const NoPage = () => {
  return (
    
      <div className="NoPage">
        <Header />
        <main>
          <ErrorPage />
        </main>
        
      </div>
    
  );
};

export default NoPage;