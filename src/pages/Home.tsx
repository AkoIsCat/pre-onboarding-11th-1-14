import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/elements/Button";

const Home = () => {
  const navigate = useNavigate();
  const handleMoveClick = (e: MouseEvent<HTMLButtonElement>) => {
    navigate(e.currentTarget.name);
  };

  return (
    <>
      <h1>Todo</h1>
      <div>
        <Button name="signin" type="submit" size="md" onClick={handleMoveClick}>
          SignIn
        </Button>
        <Button name="signup" type="submit" size="md" onClick={handleMoveClick}>
          SignUp
        </Button>
      </div>
    </>
  );
};

export default Home;
