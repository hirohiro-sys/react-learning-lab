import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [count,setCount] = useState(0);
  const onClickCount = () => {
    setCount(count+1);
  }
  return (
    <>
     <button onClick={onClickCount}>カウントボタン</button>
     <p>count👉{count}</p>
    </>
  );
}

export default App;
