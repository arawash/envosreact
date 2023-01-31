
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(<App />, document.getElementById('root'));
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
reportWebVitals(sendToVercelAnalytics);
