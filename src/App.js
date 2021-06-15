import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Layout />
    </Provider>
  );
}

export default App;
