import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../layout/Layout.js";

function Home() {
  return (
    
    <div className="home">   
    <Layout />
      <div className="home-container">
        <h1 className="home-heading">Start your adventure to Bergen city today!</h1>
        <Link to="/hotels">Click here</Link>
      </div>
    </div>
    

  );
}

export default Home;