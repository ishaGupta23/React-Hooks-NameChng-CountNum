//import { Fragment } from "react";
import React, { useState } from "react";
import './App.css'

function App() {

  const [count, setCount] = useState(0);


  const names = ["Amit", "Rajan"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [name, setName] = useState(names[currentIndex]);


  const [inputValue, setInputValue] = useState("");
  const [inputList, setInputList] = useState([]);

  const handleInputChange = (event) => {
    console.log(event)
    setInputValue(event.target.value);
  };

  const handleAddInput = () => {
    setInputList([...inputList, inputValue]);
    setInputValue("");
  };


  function handleIncrement() {
    setCount(count + 1);         //line 7 initialize
  }

  function handleDecrement() {
    setCount(count - 1);         // line 7 have initialize
  }

  function changeName() {
    setCurrentIndex(currentIndex === 0 ? 1 : 0); // we put value in line 10, 11, 12
    setName(names[currentIndex]);
  }

  

  return (

    < section className="display" >

      <div className="center1">
        <p className="col">{count}</p>
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleDecrement}>Decrease</button>
      </div>


      <div className="center2">

        <p>My name is {name}.</p>
        <button onClick={changeName}>Change Name</button>
      </div>



      <div className="center3">
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddInput}>Add Input</button>
      <div>
        {inputList.map((item, index) => (
          <div key={index}>
          {item}</div>

        ))}
      </div>
    </div>

    </section>
  );
}

export default App;
