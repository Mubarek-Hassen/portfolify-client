import { useState } from "react";
import Form from "./Form/Form";
import Header from "./Header/Header";


const LandingPage = (props) =>{
  const [startForm, setStartForm] = useState(false)

  const formStartHandler =()=>{
    setStartForm(!startForm)
  }

  return (
    <div>
      <Header />
      <h1>Welcome to Portfolify</h1>
      <h3>Create your portfolio website for free.</h3>
      <button onClick={formStartHandler}>{!startForm ? 'Start Here' : 'Close'}</button>
      {startForm && <Form/>}
    </div>
  )
}

export default LandingPage;