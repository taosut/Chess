import { createStore, Store } from 'redux';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory, History } from 'history';
import * as React from 'react';
import { Router } from 'react-router-dom';
import { AppState, createRootReducer } from '../../src/store/rootReducer';
import { ThemeProvider } from '@material-ui/core';
import { getMuiTheme } from '../../src/styles/theme';
import { ColorMode } from '../../src/interfaces/Styles/ColorMode';
import { ColorModeContext } from '../../src/styles/colorModeContext';

export const renderWithStore = (
  ui: JSX.Element,
  {
    initialState,
    route = '/',
    history = createMemoryHistory({
      initialEntries: [route],
    }),
    store = createStore(createRootReducer(history), initialState),
  }: {
    initialState?: Partial<AppState>;
    store?: Store;
    route?: string;
    history?: History;
  } = {},
) => {
  return {
    ...render(
      <ColorModeContext.Provider value={{ changeColorTheme: () => {} }}>
        <ThemeProvider theme={getMuiTheme(ColorMode.Light)}>
          <Router history={history}>
            <Provider store={store}>{ui}</Provider>
          </Router>
        </ThemeProvider>
      </ColorModeContext.Provider>,
    ),
    store,
    history,
    theme: getMuiTheme(ColorMode.Light),
  };
};
