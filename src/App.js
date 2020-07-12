import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import React from "react";
import {createBrowserHistory} from "history";
import {CaseProvider} from "./containers/cases/CaseContext";
import Container from "./components/Container";
import BrowserRouter from "./Router";

const history = createBrowserHistory();

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Container>
        <CaseProvider>
          <BrowserRouter history={history}/>
        </CaseProvider>
      </Container>
    </MuiPickersUtilsProvider>
  );
}

export default App;
