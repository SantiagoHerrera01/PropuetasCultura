import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Consideration from './components/Consideration.tsx';
import ProposalDetails from './components/ProposalDetails.tsx';
import UserData from './components/UserData.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path="" element={<App />}>
        <Route path="dataUser" element={<UserData />} />
        <Route path="proposalDetails" element={<ProposalDetails />} />
        <Route path="consideration" element={<Consideration />} />
      </Route>
    </Routes>
  </Router>,
);
