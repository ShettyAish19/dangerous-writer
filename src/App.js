import React, { useState, useEffect, useRef } from "react";

function App() {
  const [text, setText] = useState("");
  const [timer, setTimer] = useState(5);
  const intervalRef = useRef(null);

  // Reset timer when user types
  const handleChange = (e) => {
    setText(e.target.value);
    setTimer(5);
  };

  useEffect(() => {
    // Count down every second
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          setText(""); // clear text
          return 5;    // reset timer
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div style={{
      height: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", alignItems: "center", background: "#fdf6e3"
    }}>
      <h1>The Dangerous Writing App</h1>
      <p style={{ fontSize: "20px" }}>⏳ Time left: {timer}s</p>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Start writing... don't stop!"
        style={{
          width: "80%", height: "60%", fontSize: "18px",
          padding: "15px", borderRadius: "8px"
        }}
      />
    </div>
  );
}

export default App;
