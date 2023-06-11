import { useState } from "react";

// import "./index.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
const App = () => {
  // let step = 3;
  const [step, setStep] = useState(1);
  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
    console.log(step);
  };
  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    console.log(step);
  };
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""} `}>1</div>
        <div className={`${step >= 2 ? "active" : ""} `}>2</div>
        <div className={`${step >= 3 ? "active" : ""} `}>3</div>
      </div>
      <p className="message">{messages[step - 1]}</p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "black", color: "#fff" }}
          onClick={handlePrev}
        >
          prev
        </button>
        <button
          style={{ backgroundColor: "black", color: "#fff" }}
          onClick={handleNext}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default App;
