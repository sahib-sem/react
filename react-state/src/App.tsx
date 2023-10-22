import { Provider } from 'react-redux';
import { Header } from './Header';
import { Main } from './Main';
import { store } from './store/store';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Provider store={store}>
        <Header />
        <Main />
      </Provider>
    </div>
  );
}

export default App;
