import { useEffect, useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';

function App() {
  const [portfolios, setPortfolios] = useState()
  const fetchPortfolio = async ()=>{
    try {
      const data = await fetch('http://localhost:4000/portfolios');
      const res = await data.json()
      console.log(res)
      setPortfolios(res)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchPortfolio()
  },[])
  return (
    <div className="App">
      <LandingPage />
      { portfolios && portfolios.map((portfolio, id)=> {
        return (
          <div key={portfolio._id}>
          <h1 >{portfolio.full_name}</h1>
          {/* <img src={ portfolio.image }/> */}
          <ul>
            {portfolio.skills.map((item,id)=>{
              return <li key={id}>{item}</li>
            })}
          </ul>
          
          </div>
        )
      })}
    </div>
  );
}

export default App;
