import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
