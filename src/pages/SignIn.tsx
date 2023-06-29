import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useValidation from '../hooks/useValidation';
import { signInPostDate } from '../apis/SignAxios';

interface FormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      navigate('/todo');
    }
  }, []);

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const [emailStatus, passwordStatus] = useValidation(formData);

  const onChangeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };

  const onChangePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      password: e.target.value,
    });
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    signInPostDate(formData.email, formData.password).then((response) => {
      if (response.status !== 200) {
        alert('이메일 또는 비밀번호가 올바르지 않습니다.');
        return;
      }
      console.log(response);
      localStorage.setItem('access_token', response.data.access_token);
      navigate('/todo');
      alert('로그인 성공');
    });
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>이메일</label>
          <input
            type="email"
            data-testid="email-input"
            placeholder="@을 포함해서 입력해주세요."
            onChange={onChangeEmailHandler}
          />
          <div>{emailStatus.message}</div>
        </div>
        <div>
          <label>비밀번호</label>
          <input
            type="password"
            data-testid="password-input"
            placeholder="8자 이상 입력해주세요."
            onChange={onChangePasswordHandler}
          />
          <div>{passwordStatus.message}</div>
        </div>
        <div>
          <button
            type="submit"
            data-testid="signin-button"
            disabled={!(emailStatus.status && passwordStatus.status)}
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

// import { Button } from "../components/elements/Button";
// import { InputField } from "../components/elements/InputField";
// import { Layout } from "../styles/Layout";

// import * as S from "../styles/Sign.style";

// export const SignIn = () => {
//   return (
//     <Layout>
//       <S.Title>SignIn</S.Title>
//       <S.AuthWrap>
//         <p>ID</p>
//         <InputField testname="email-input" size="full" type="email" />
//         <p>PASSWORD</p>
//         <InputField testname="password-input" size="full" type="password" />
//         {/* disabled 속성 추가 필요 */}
//         <Button testname="signup-button" type="submit" size="lr">
//           로그인
//         </Button>
//       </S.AuthWrap>
//     </Layout>
//   );
// };
