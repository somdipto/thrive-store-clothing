
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Desktop from './components/Desktop';
import NotFound from './pages/NotFound';
import { Toaster } from "sonner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-right" />
    </Router>
  );
}

export default App;
