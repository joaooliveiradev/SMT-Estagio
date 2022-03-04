import { Login } from 'components/Login'
import { Dashboard } from 'components/Dashboard'
import { useSelector } from 'react-redux';
import { selectAuth } from 'stores/AuthSlice'
function App() {
  const { isAuth } = useSelector(selectAuth)
  return (
    <div className="App">
      {isAuth ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;
