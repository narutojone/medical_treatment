import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Routes from './routes';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
          <IntlProvider locale='en'>
            <Routes />
          </IntlProvider>
      </BrowserRouter>
    </Provider>,
    document.getElementById('example-app'),
  )
});