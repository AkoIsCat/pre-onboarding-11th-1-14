import { Button } from '../elements/Button';
import { useNavigate } from 'react-router-dom';

const TodoLogout = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/signin');
  };

  return (
    <Button type='submit' size='md' onClick={onClickLogout}>
      Logout
    </Button>
  );
};

export default TodoLogout;
