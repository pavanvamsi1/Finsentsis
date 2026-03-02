import Navbar from "./components/layout/Navbar";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}