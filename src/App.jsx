import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home      from './pages/Home';
import About     from './pages/About';
import Dashboard from './pages/Dashboard';
import Login     from './pages/Login';
import Showcase  from './pages/Showcase';
import { ToastProvider } from './components/ui';

export default function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/about"     element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login"     element={<Login />} />
          <Route path="/components" element={<Showcase />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}
