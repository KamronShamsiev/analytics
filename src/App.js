import Layout from './Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nodes, Products, Suppliers, Offers } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Nodes />
            </Layout>
          }
        />
        <Route
          path="/suppliers"
          element={
            <Layout>
              <Suppliers />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />
        <Route
          path="/offers"
          element={
            <Layout>
              <Offers />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
