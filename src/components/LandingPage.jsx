import { Fragment } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";


const LandingPage = (props) =>{

  return (
    <div>
      <Header />
      <h1>Welcome to Portfolify</h1>
      <h3>Create your portfolio website for free.</h3>
      <Footer />
    </div>
  )
}

export default LandingPage;