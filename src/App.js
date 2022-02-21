import './App.css';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
        <div className="navWrapper">
          <Navbar/>
         </div>
        <div className="mainWrapper">
            <Main/>
            <Footer/>
         </div>
    </div>
  );
}

export default App;
