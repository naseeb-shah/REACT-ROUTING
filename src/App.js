
import './App.css';
import { BrowserRouter, Routes, Route
} from "react-router-dom";
import Home from './component/home';
import Allpro from './component/allpro'
import Singleproduct from './component/singleproduct';
import NoPage from './component/nopage';
import Layout from './component/layout';
function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="allpro" element={<Allpro />} />
        <Route path='product/:id' element={<Singleproduct />} />
        <Route path="*" element={<NoPage />} />
        </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
