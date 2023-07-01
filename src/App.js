// import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import GithubCalendar from './Components/Githubcalender';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import AllRoutes from './Components/AllRoutes';

function App() {
  return (
    <Box>
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
