import RouterPage from './page/index'
import DefaultLayout from './layout/default'
import './App.css';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <RouterPage />
      </DefaultLayout>
    </div>
  );
}

export default App;
