import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import logo from './logo.svg';
import './App.css';

function App() {
const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <div className="App">
<>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         

انفوس - انظمة تشغيل بيئية
EnvOS - Environmental Operating Systems
 </p>





        <a
          className="App-link"
          href="https://envos.net"
          target="_blank"
          rel="noopener noreferrer"
        >
EnvOS - Environmental Operating Systems
        </a>
      </header>
    </div>
  );
}

export default App;
