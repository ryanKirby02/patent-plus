import Navbar from './components/Navbar';
import InfoForm from './Pages/InfoForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InfoFormSideBar from './components/InfoFormSideBar';
import styled from 'styled-components';
import { useState } from 'react';

function App() {
  let [pageNumber, setPageNumber] = useState(1);

  return (
    <>
      <Navbar />
      <AppContainer>
        <InfoFormSideBar pageNumber={pageNumber} setPageNumber={setPageNumber} />
        <Router>
          <Switch>
            <Route path='/'>
              <InfoForm pageNumber={pageNumber} setPageNumber={setPageNumber} />
            </Route>
          </Switch>
        </Router>
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  display: flex;
`

export default App;
