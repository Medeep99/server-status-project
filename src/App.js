
import './App.css';
import DataTable from './components/DataTable';
import MatchMakingBoard from './components/MatchMakingBoard';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <>
      <NavigationBar />
      <MatchMakingBoard />
      <DataTable />
    </>
  );
}

export default App;
