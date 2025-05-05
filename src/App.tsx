
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Desktop from './components/Desktop';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
