import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeWrapper = styled.div`
  position: absolute;
  width: 24rem;
  height: 500px;
  border-radius: 0.5rem;
  padding: 64px 32px;
  opacity: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
  & > h1 {
    // 공통 부분
    margin: 0;
    // ----
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 2.25rem;
    text-align: center;
  }
  & > div {
    display: flex;
    justify-content: center;
    width: 320px;
    margin-top: 100px;
  }
  & > div button {
    // 공통 부분
    margin: 0;
    font-family: inherit;
    font-size: 100%;
    text-transform: none;
    //-----
    cursor: pointer;
    background-color: #6ee7b7;
    border-radius: 0.375rem;
    color: rgb(255 255 255);
    font-weight: 600;
    padding: 0.5rem 0.75rem;
    &:hover {
      background-color: #37b784;
    }
  }
  & > div button:first-child {
    margin-right: 12px;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const handleMoveClick = (e: MouseEvent<HTMLButtonElement>) => {
    navigate(e.currentTarget.title);
  };

  return (
    <HomeWrapper>
      <h1>Todo</h1>
      <div>
        <button title="signin" type="button" onClick={handleMoveClick}>
          SignIn
        </button>
        <button title="signup" type="button" onClick={handleMoveClick}>
          SignUp
        </button>
      </div>
    </HomeWrapper>
  );
};

export default Home;
