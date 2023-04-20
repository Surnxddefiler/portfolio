import './App.css';
import { Header } from './components/header';
import { Intro } from './components/intro';
import { Projects } from './components/projects';
import { Technologies } from './components/technologies';
import { Experience } from './components/experience';
import { Contact } from './components/form';
import { Additional } from './components/additional';


function App() {
  return (
    <>
      <Header />
      <Intro />
      <Projects />
      <Technologies />
      <Additional />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
