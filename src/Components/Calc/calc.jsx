import { useState } from "react";
import "./calc.css";
import React from "react";
function Calc() {
  const [calc, setCalc] = useState("");
  const [result, setresult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setresult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const Delete = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };

  return (
    <>
      <div className="Calc">
        <div className="calculator">
          <div className="display">
            {result ? <span>({result})</span> : ""}
            {calc || "0"}
          </div>

          <div className="operatores">
            <button onClick={() => updateCalc("/")}>/</button>
            <button onClick={() => updateCalc("*")}>*</button>
            <button onClick={() => updateCalc("+")}>+</button>
            <button onClick={() => updateCalc("-")}>-</button>

            <button onClick={Delete}>DEL</button>
          </div>

          <div className="digits">
            {createDigits()}
            <button onClick={() => updateCalc("0")}>0</button>
            <button onClick={() => updateCalc(".")}>.</button>
            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calc;
