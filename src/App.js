import logo from './logo.svg';
import './App.css';
import useTimeout from './Hooks/TestCoponent';
import { useFetch } from './Hooks/useFetch';

function App() {
  const ready=useTimeout(3000);
  const {loading,error,data}=useFetch()

  return (
    <div className="App">
     <h1>{ready ? "I am in":"i am out"}</h1> 
     <h1>{loading ? "Loading" : "Complete"}</h1>
     <div>
      {data.map((elem)=>{elem.login})}
     </div>
    </div>
  );
}

export default App;
