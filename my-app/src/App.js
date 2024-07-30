import "./App.css";
import PortofolioContainer from "./PortofolioContainer/PortofolioContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <section>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<PortofolioContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </section>
  );
}

export default App;
