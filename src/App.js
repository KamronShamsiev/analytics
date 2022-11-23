import Layout from './Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nodes from "./pages/nodes/Nodes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Nodes/></Layout>} />
        <Route path="/suppliers" element={<Layout></Layout>} />
        <Route path="/products" element={<Layout></Layout>} />
        <Route path="/offers" element={<Layout></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
