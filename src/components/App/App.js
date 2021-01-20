import Header from '../Header/Header';
import './App.css';
import Footer from '../Footer/Footer';
import RouteURL from '../RouteURL/RouteURL';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <RouteURL />
      <Footer />
    </Router>
  );
}

export default App;
