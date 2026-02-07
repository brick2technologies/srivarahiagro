import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductPage";
import Contact from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFoundPage";

import ScrollToTop from "./components/ScrollToTop";




function App() {
  return (
    <div className="min-h-screen bg-[#FEFACD] flex flex-col">
      {/* Header */}
      <ScrollToTop />
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/Products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
