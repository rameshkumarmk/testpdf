
import { useState } from "react";
import PdfViewerComponent from "./components/PdfViewerComponent";
import "./App.css";

function App() {
  const [document, setDocument] = useState("test-original.pdf");

  const handleOpen = () => setDocument("document.pdf");

  return (
    <div className="App">
      <button className="App-button" onClick={handleOpen}>
        Open another document
      </button>
      <div className="App-viewer">
        <PdfViewerComponent document={document} />
      </div>
    </div>
  );
}

export default App;
