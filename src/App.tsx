import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './redux';
import { GlobalStyle } from './styles/GlobalStyle';
import Greetings from './components/Greetings';
import bootstrap from './redux/bootstrap';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App = () => {
  bootstrap(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Greetings />
      </PersistGate>
    </Provider>
  );
};

render(<App />, mainElement);
