import './App.scss';
import Piano from './components/Piano';
import About from './components/pages/About';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function App() {
  const [AboutDisplay, setAboutDisplay] = useState(false);

  return (
    <main>
      <Piano 
        
      />
      <About display={AboutDisplay}/>
    </main>
  );
};
