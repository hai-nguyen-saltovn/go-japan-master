import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Routes } from './routes';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { green, orange } from '@material-ui/core/colors';
import { roseColor } from '../styles/material-dashboard-pro-react';

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Routes />
  </MuiThemeProvider>, document.getElementById('root') as HTMLElement
);
registerServiceWorker();
