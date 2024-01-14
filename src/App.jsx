import React from "react";
import TextAnalyzer from "./components/TextAnalyzer";

const App = () => {
  return (
    <div
      style={{
        padding: "40px",
        background:
          "radial-gradient(100% 100% at 49.12% 0%, #FFFFFF 0%, #EFF6FF 100%)",
        height: "100vh",
      }}
    >
      <TextAnalyzer />
    </div>
  );
};

export default App;
