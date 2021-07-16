import Navbar from './components/Navbar';
import InfoForm from './Pages/InfoForm';
import FinalReview from './Pages/FinalReview';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  let [pageNumber, setPageNumber] = useState(1);

  return (
    <>
      <Navbar />
        <Router>
            <Route path='/' exact>
              <InfoForm pageNumber={pageNumber} setPageNumber={setPageNumber} />
            </Route>
            <Route path='/final' exact>
              <FinalReview pageNumber={pageNumber} setPageNumber={setPageNumber} />
            </Route>
        </Router>
    </>
  );
}


export default App;
