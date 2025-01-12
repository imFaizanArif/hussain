import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages";

import '@fontsource/raleway/400.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App