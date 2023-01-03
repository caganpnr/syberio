import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Landing from "./pages/Landing";
import ManInMiddlePage from "./pages/ManInMiddlePage";
import CreatePGPKeysPage from "./pages/CreatePGPKeysPage";

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="man-in-middle-attack" element={<ManInMiddlePage />} />
          <Route path="create-public-private-key" element={<CreatePGPKeysPage />} />
        </Routes>
      </Router>
    </ChakraProvider>

  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
