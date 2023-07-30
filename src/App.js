import './App.css';
import Navbar  from './Component/Navbar';
import Home from './Component/Home';
import Project from './Component/Project';
import Blogs from './Component/Blogs'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Project/>
      <Blogs/>
    </div>
  );
}

export default App;
