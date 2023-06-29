import { Button } from "../components/elements/Button";
import { InputField } from "../components/elements/InputField";
import { Layout } from "../styles/Layout";

import * as S from "../styles/Sign.style";

export const Signup = () => {
  return (
    <Layout>
      <S.Title>SignUp</S.Title>
      <S.AuthWrap>
        <p>ID</p>
        <InputField testname="email-input" size="full" type="email" />
        <p>PASSWORD</p>
        <InputField testname="password-input" size="full" type="password" />
        {/* disabled 속성 추가 필요 */}
        <Button testname="signup-button" type="submit" size="lr">
          회원가입
        </Button>
      </S.AuthWrap>
    </Layout>
  );
};
