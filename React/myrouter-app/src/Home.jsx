import { useNavigate } from "react-router-dom";

function Home(){

    const navigate = useNavigate();

    function handleLogic(){
        //naviagte('/Address of page- where you have to navigate')
        navigate('/dashboard')
    }

    return(
        <div>
            <h1>Welcome Student </h1>
            <button onClick={handleLogic}>Login</button>
        </div>
    )
}

export default Home