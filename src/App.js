import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Notelist from './components/Notelist';

function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Notelist/>
    </div>
  );
}

export default App;
