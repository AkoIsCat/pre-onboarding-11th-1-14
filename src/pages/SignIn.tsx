import { Button } from "../components/elements/Button";
import { InputField } from "../components/elements/InputField";
import { Layout } from "../styles/Layout";

import * as S from "../styles/Sign.style";

export const SignIn = () => {
  return (
    <Layout>
      <S.Title>SignIn</S.Title>
      <S.AuthWrap>
        <p>ID</p>
        <InputField testname="email-input" size="full" type="email" />
        <p>PASSWORD</p>
        <InputField testname="password-input" size="full" type="password" />
        {/* disabled 속성 추가 필요 */}
        <Button testname="signup-button" type="submit" size="lr">
          로그인
        </Button>
      </S.AuthWrap>
    </Layout>
  );
};
