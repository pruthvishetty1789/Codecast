import './App.css';
import EditorPage from './component/EditorPage';
import Home from './component/Home';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor/:roomId" element={<EditorPage />} />
      </Routes>
    </>
  );
}

export default App;
