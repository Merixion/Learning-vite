import { useState } from "react";

function App() {
  const [text, setText] = useState('Привет, Мир!');

  const SayHello = () =>{
    setText("Привет, Максим");
  }

  return (
    <div>
    <h1>{text}</h1>
    <button onClick={SayHello}></button>
    </div>
  );
}

export default App
