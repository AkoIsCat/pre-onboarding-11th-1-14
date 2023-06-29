import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useValidation from '../hooks/useValidation';
import { signPostData } from '../apis/SignAxios';

interface FormData {
  email: string;
  password: string;
}

const SignUp = () => {
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
    signPostData(formData.email, formData.password).then((response) => {
      if (response.status !== 201) {
        alert('동일한 이메일이 존재합니다');
        return;
      }
      navigate('./signin');
    });
  };

  return (
    <div>
      <h2>회원가입</h2>
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
            data-testid="signup-button"
            disabled={!(emailStatus.status && passwordStatus.status)}
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
