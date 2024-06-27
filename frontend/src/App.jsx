import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from "./components/Features";
import BuyNow from "./components/BuyNow";

const App = () => {
  return (
      <Router>
        <div className="app">
        <Header />
        <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/reviews' element = {<Reviews />}></Route>
          <Route path='/features' element = {<Features />}></Route>
          <Route path='/buy' element = {<BuyNow />}></Route>
        </Routes>
        <Footer />
        </div>
      </Router>
    );
}
 
export default App;
  