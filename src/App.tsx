import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Todo from './pages/Todo';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<SignUp />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
};

export default App;
