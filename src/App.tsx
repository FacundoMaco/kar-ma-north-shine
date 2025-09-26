import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import { Toaster } from "@/components/ui/toaster";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/productos" element={<Products />} />
    </Routes>
    <Toaster />
  </Router>
);

export default App;
