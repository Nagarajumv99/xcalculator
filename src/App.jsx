import { useState } from "react";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  // Handle button clicks
  const handleClick = (value) => {
    if (value === "C") {
      setExpression("");
      setResult("");
    } else if (value === "=") {
      try {
        if (expression.trim() === "") {
          setResult("Error");
          return;
        }
        // eslint-disable-next-line no-eval
        const evalResult = eval(expression);
        setResult(evalResult.toString());
      } catch (err) {
        setResult("Error");
      }
    } else {
      setExpression((prev) => prev + value);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Input field */}
      <input
        type="text"
        value={expression}
        readOnly
        style={{
          width: "250px",
          height: "30px",
          fontSize: "18px",
          textAlign: "right",
        }}
      />

      {/* Result */}
      <div style={{ marginTop: "10px", fontSize: "20px" }}>{result}</div>

      {/* Buttons grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 60px)", gap: "10px", justifyContent: "center", marginTop: "20px" }}>
        {/* Row 1 */}
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>

        {/* Row 2 */}
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        {/* Row 3 */}
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("*")}>*</button>

        {/* Row 4 */}
        <button onClick={() => handleClick("C")}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("=")}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
}

export default App;
