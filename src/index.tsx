import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './index.css';
import { SnackbarProvider } from 'notistack';
import SnackbarCloseButton from './Utils/enqueNotistack/SnackbarCloseButton';
import 'remixicon/fonts/remixicon.css'
import { HashRouter as Router } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3} action={(snackbarKey:any) => <SnackbarCloseButton snackbarKey={snackbarKey} />}>
      <Provider store={store}>
      <Router>
        <Navbar />
        <App />
      </Router>
      </Provider>
    </SnackbarProvider>
  </React.StrictMode>
);
if (module.hot) {
  module.hot.accept('./App', () => {
      const NextApp = require('./App').default;
      root.render(
        <React.StrictMode>
          <SnackbarProvider maxSnack={3} action={(snackbarKey:any) => <SnackbarCloseButton snackbarKey={snackbarKey} />}>
            <Provider store={store}>
              <Router>
              <Navbar />
                <NextApp />
              </Router>
            </Provider>
          </SnackbarProvider>
        </React.StrictMode>
      );
  });
}

