import { useContext, useEffect } from 'react'
// import { UserContext } from "../contexts/UserContext";
import { LoggedContext } from "../contexts/LoggedContext";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  const logged = useContext(LoggedContext);
    useEffect(() => {
      if (!logged.logged) {
        navigate("/login");
      }else{
        navigate("/precioluz");
      }
    }, [logged.logged]);
  
  return (<div>Hola soy el componente Home</div>)
}

export default Home