# 원티드 프리온보딩 11차 1주차 14팀 멘토과제

2023.06.27~ 2023.06.30

<br>

## 팀

- 팀장 : [장윤신](https://github.com/yun-sin)
- 팀원 : [김은혜](https://github.com/AkoIsCat), [박진현](https://github.com/rondido), [한지윤](https://github.com/jyhan14), [박재우](https://github.com/codingjwp), [박하린](https://github.com/khakaa)

<br>

## 진행 방식

각자 사전 과제에서 구현한 기능들 중에서 Best Practice를 선별하기 위해 구현 기능을 문서화 하는 방식

<br>

## 제출 기한

6월 30일 24시

<br>

## 1차 회의

- 6월 27일 오후 6시 45분
- 팀장 : 장윤신
- 팀원 : 박하린, 김은혜 , 박재우, 박진현, 한지윤

<br>

## 2차 회의

- 6월 28일 오후 3시
- 회의 전까지 문서화 후 Best Practice 선별

<br>

## 회의 내용

- git Commit 문서화
- ESLint
- Perttier
- 사용 라이브러리, CSS
- 배

---

<br>

## [사전 과제](https://github.com/walking-sunset/selection-task)

| Repository                                                            | 배포 링크                                                        |
| --------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [김은혜](https://github.com/AkoIsCat/wanted-pre-onboarding-frontend)  | https://pre-onboarding-mission.netlify.app/                      |
| [박진현](https://github.com/rondido/wanted-pre-onboarding-frontend)   | https://poetic-trifle-fab8c2.netlify.app/                        |
| [장윤신](https://github.com/yun-sin/wanted-pre-onboarding-frontend)   | https://sprightly-meerkat-3bb738.netlify.app/                    |
| [한지윤](https://github.com/jyhan14/wanted-pre-onboarding-frontend)   | https://wanted-pre-onboarding-frontend-jyhan14.vercel.app/signin |
| [박재우](https://github.com/codingjwp/wanted-pre-onboarding-frontend) | https://wanted-pre-onboarding-frontend-nine-mocha.vercel.app/    |
| [박하린](https://github.com/khakaa/wanted-pre-onboarding-frontend)    | https://wanted-pre-onboarding-frontend-blue.vercel.app/          |

<br>

## 파트 분담

| 파트                          | 팀원       |
| ----------------------------- | ---------- |
| 프로젝트 셋팅, Home           | 재우       |
| 투두                          | 진현, 재우 |
| 로그인 /회원가입 /유효성 검사 | 은혜       |
| 라우터 - loader 1             | 지윤       |
| UI(디자인)                    | 하린       |
| api, 배포, READEME 작성       | 윤신       |

---

<br>
<br>

# Best Practice

<br>

## 사용 라이브러리

| 팀원   | 기능                                                                            | 비고 |
| ------ | ------------------------------------------------------------------------------- | ---- |
| 김은혜 | React-Router-Dom , styled-components                                            |      |
| 박진현 | React-routet-dom,styled-components, axios                                       |      |
| 장윤신 | react-router-dom, styled-components, axios                                      |      |
| 한지윤 | react-router-dom, styled-components, axios                                      |      |
| 박재우 | 지정 라이브러리[ react, react-router-dom ], 추가 라이브러리[ axios, typescript] |      |
| 박하린 | axios 1.4.0, react-router-dom 6.13.0                                            |      |

### 👍 Best Practice

- react-router-dom, styled-components, axios, typescript, react-icon
  - CRA, react-router-dom은 과제 지정 기본 라이브러리
  - axios vs Fetch
    | Axios | Fetch |
    | ---------------------------------------- | ------------------------------------------- |
    | 속성으로 url을 필수로 요구 | 속성이 아닌 첫 번째 인자로 전달 |
    | 쉽게 설치할 수 있는 타 사 패키지 | 최신 브라우저에 내장, 설치가 필요 없습니다. |
    | XSRF 보호 기능 | 보호 기능이 없습니다. |
    | staus 200이고 ok속성이 참일 때 요청 성공 | ok 속성이 참일 때 성공 |
    | 요청 취소 및 요청 시간 초과 허용 | X |
    | 요청 가로채기 | X |
    | 다운로드, 업로드 진행 상황 기능 존재 | 다운로드는 만들 수 있으나 |
    | 업로드는 없습니다. |
    | IE에도 가능 | 최신 브라우저만 가능 |
    | Get요청 시 data속성 사용 시 무시 | Get요청 시 body속성으로 데이터 전달 가능 |
    서버 400, 500 발생 시 fetch에서 따로 코드 작성이 필요.
  - **typescript**
    - 타입의 안전성

---

<br>

## 스타일링

| 팀원   | 기능                                 | 비고 |
| ------ | ------------------------------------ | ---- |
| 김은혜 | Styled-components                    |      |
| 박진현 | Styled-components                    |      |
| 장윤신 | Styled-components                    |      |
| 한지윤 | Styled-components                    |      |
| 박재우 | css module                           |      |
| 박하린 | tailwindcss 3.3.2, react-icons 4.9.0 |      |

### 👍 Best Practice

- Styled-components
  - 익숙함
  - javascript로 작성 가능.
  - 재사용성

---

<br>

## 배포

| 팀원   | 기능    | 비고 |
| ------ | ------- | ---- |
| 김은혜 | netlify |      |
| 박진현 | netlify |      |
| 장윤신 | netlify |      |
| 한지윤 | vercel  |      |
| 박재우 | vercel  |      |
| 박하린 | vercel  |      |

### 👍 Best Practice

- vercel
  - netlify 사용시 다른 페이지에서 새로고침시 404 에러 발생 → 추가 조치 필요

---

<br>

## 폴더 구조

| 팀원   | 기능                                               | 비고 |
| ------ | -------------------------------------------------- | ---- |
| 김은혜 | component, page, store, api                        |      |
| 박진현 | components.apis,containers,lib,pages,tokens        |      |
| 장윤신 | components, pages, styles                          |      |
| 한지윤 | components, pages, shared                          |      |
| 박재우 | src → folder: assts, async, components, css, pages |      |
| 박하린 | api, components, pages, routes, utils              |      |

### 👍 Best Practice

```
- components → 컴포넌트
    - elements
        - Button.tsx
        - InputField.tsx
    - Todo
        - TodoItemGroup.tsx (목록 전체)
        - TodoItem.tsx (목록 1개)
        - TodoModify.tsx (수정)
        - TodoCreate.tsx (생성)

- hooks → 훅
    - useValidation.tsx (유효성 검사 → 버튼 활성화 훅)

- styles → 공용 UI
    - GlobalStyles.tsx (reset)
    - Layout.tsx

- pages → 페이지 UI
    - Home.tsx  (첫 페이지)
    - SignUp.tsx (회원가입)
    - SignIn.tsx (로그인)
    - TodoList.tsx (할 일 목록)

- api → axios api 통신
    - SignAxios.tsx
    - TodoAxios.tsx

- App.tsx
- Routers.tsx
- eslint
- prettier.ts
```

> 참고자료
>
> [presentational and container 패턴이란 무엇인가](https://tecoble.techcourse.co.kr/post/2021-04-26-presentational-and-container/)
>
> [Patterns.dev - Modern Web App Design Patterns](https://www.patterns.dev/)
>
> [React 디자인 패턴](https://www.nextree.io/react-design-pattern/)

---

<br>

## 협업 방법

| 팀원   | 의견                                                   |     |
| ------ | ------------------------------------------------------ | --- |
| 김은혜 | 파트별로 분량을 정한 뒤에 하나의 애플리케이션으로 합침 |     |
| 박진현 | 잘 모르겠어요…………….. ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ        |     |
| 장윤신 | 파일 별로 분담하여 하나의 레포지토리에 커밋            |     |
| 한지윤 | 파트별로 나눠서 합치기                                 |     |
| 박재우 |                                                        |     |
| 박하린 | 파트별로                                               |     |

---

<br>

## 유효성 검사

| 팀원   | 기능                                                                                                                                                                                                                                                     | 비고 |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| 김은혜 | id와 password를 저장할 state와 유효성 체크 변수를 생성 후 if문을 이용해 id에 @가 포함되어 있는지, password가 8자리 이상인지 체크함. 별도 커스텀 훅 사용 X                                                                                                |      |
| 박진현 | lib/useValidation에서 유효성 검사를 진행하고 비 구조화 할당으로 email과 password의 상태를 전달받는다. <br> 1. email에는 includes를 사용하여 @ 있는지 여부를 판단하고 true/false 반환 <br> 2. password는 길이를 이용하여 검사하고 불리언 타입으로 반환    |      |
| 장윤신 | 1. input에 onChange 이벤트 삽입하여 state 변경 <br> 2. useEffect에서 email과 password가 바뀔때마다 검사 실행 <br> 3. 검사결과에 따라 button의 disabled 속성값 true/false로 변경                                                                          |      |
| 한지윤 | 유효성 검사가 필요한 컴포넌트(Signup, Signin)에 바로 작성 <br> - test() 사용하여 정규표현식 일치 여부에 따라 유효성 검사 <br> - onChangeHandler 이용해 입력 필드에서 값이 변경될 때마다 유효성 검사를 수행                                               |      |
| 박재우 | 1. 이메일 유효성 검사 → HTML5 기능 사용 브라우저에서 검사 type=”email” <br> 2. 비밀번호 길이 유효성 검사 → HTML5 기능 사용 브라우저에서 검사 minLength(8) <br>3. 버튼 disable 상태 변화 → onChange 이벤트에서 event.target.validity.valid 로 유효성 판단 |      |
| 박하린 | - utils 폴더에 validatinCheck 함수 따로 분리 <br> - Signup.js , Signin.js 페이지에서 함수 import 하여 유효성 검사 후, btnState 변경 <br> \* email, password의 input tag onChange 이벤트 발생할 때마다 함수 실행됩니다. <br> → useEffect                  |      |

### 👍 Best Practice

- 커스텀훅 분리(진현님 코드 참고)
- 메시지 출력(실시간)
- 검사(이메일:@여부, 패스워드:8자 이상)
- 버튼 disable

---

<br>

## 경로 이동 (회원가입, 로그인 시)

| 팀원   | 기능                                   | 비고 |
| ------ | -------------------------------------- | ---- |
| 김은혜 | useNavigate 사용                       |      |
| 박진현 | react-router-dom useNavigate 사용      |      |
| 장윤신 | react-router-dom의 useNavigate 사용    |      |
| 한지윤 | react-router-dom의 useNavigate 사용    |      |
| 박재우 | react-router-dom의 훅 useNavigate 사용 |      |
| 박하린 | useNavigate 훅을 사용                  |      |

### 👍 Best Practice

- useNavigate

---

<br>

## 로그인 여부에 따른 리다이렉트

| 팀원   | 기능                                                                                                                                                                         | 비고 |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| 김은혜 | useEffect로 최초 렌더링 시 토큰 여부를 확인한 후 존재하면 todo 페이지로 바로 이동, <br> 토큰이 없는 상태로 todolist 페이지에 접근하려고 한다면 회원가입 페이지로 이동        |      |
| 박진현 | Container file이 아닌 page 파일에서 token 여부를 확인하여 첫 렌더링 시에 리다이렉트 처리 <br> api 통신 후 반환 받은 상태 코드에 따라 리다이렉트 처리                         |      |
| 장윤신 | 1. 로그인시 로컬스토리지에 로그인정보 저장 <br> 2. 페이지 마운트시 로컬스토리지 확인 <br> 3. react-router-dom의 Navigate 사용                                                |      |
| 한지윤 | react-router-dom의 BrowserRouter를 사용 <br> - Router 컴포넌트 내에서 accessToken 유무를 확인 <br> - Navigate 컴포넌트 속성 중 하나인 replace 를 사용하여 새로운 경로로 대체 |      |
| 박재우 | react-router-dom 기능인 loader 속성을 사용 로그인 여부에 따라 redirect 사용                                                                                                  |      |
| 박하린 | PrivateRoute 컴포넌트 구현하여 토큰 여부에 따라 리다이렉트 처리                                                                                                              |      |

### 👍 Best Practice

- loader 사용 → best

  - useEffect 시 해당 page Component의 UI가 표시되었다 redirect 되는 현상 발생
  - loader를 통해 컴포넌트가 생성되기 전에 컴포넌트에 데이터를 전달
  - loader 사용 이미지
    ![Untitled](https://github.com/wanted-pre-onboarding-11th-14team/pre-onboarding-11th-1-14/assets/99275134/6b2d54fe-dc44-417d-8de6-b2e2998e9c12)

  - useEffect 사용 이미지

---

<br>

## Todo API (생성, 읽기, 수정, 삭제)

| 팀원   | 기능                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 비고                                           |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 김은혜 | context api 사용, api 요청 분리 <br> - 생성 : 추가하는 api 요청 후 리듀서로 state에 추가. 스프레드 연산자를 사용해서 기존 배열에 추가 <br> - 읽기 : 투두 페이지 최초 렌더링 시 get api를 사용해 불러옴. 리듀서를 이용 해 컨텍스트 state에 할당. <br> - 수정 : api 요청에 수정된 값을 같이 요청 후 state 수정. state 배열을 map으로 순회하며 수정된 item의 id를 찾으면 수정된 내용을 변경 <br> - 삭제 : 해당 item의 id를 api와 같이 요청을 보내 삭제 후 state에서도 삭제. filter를 이용해 기존 item과 삭제할 item의 id를 대조해 id가 다른 경우에 배열에서 제외합니다.                                                                                     |                                                |
| 박진현 | apis/Api.js <br> Api.js에서 파일에서는 실질적으로 수행되는 api 통신 수행 <br> apis/apiClient.js <br> apiClient.js에서는 axios.create를 이용하였으며 반복되는 URL 주소와 ContentType등을 분리하여 재사용성을 고려함.                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                |
| 장윤신 | - 읽기 : useEffect 사용 todo 페이지 마운트시 getTodos(토큰) 실행 → setTodoList                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | api 요청 분리 하지 않음 <br> 불필요한 then사용 |
| 한지윤 | 자세한 코드 설명 : 한지윤 (https://www.notion.so/354f1ea96f8d4278b85e0c5a977356a9?pvs=21) <br> - api 요청부분을 분리하지 않고 한 컴포넌트 내에서 요청 수행 <br> (생성, 읽기, 수정, 삭제의 api 요청부분이 전부 TodoList.jsx에 있습니다. 가독성 측면에서 좋지 않은 것 같습니다.) <br> - 생성: addTodo : 서버로 새로운 Todo를 보내준다.(POST) <br> - 읽기: fetchTodos : 서버에서 Todo 목록을 불러온다.(GET) <br> - 수정: toggleComplete, modifyTodo(PUT) <br> → 코드 중복을 줄이기 위해 toggleComplete 함수와 modifyTodo 함수의 중복 코드를 분리하여 재사용 가능한 함수로 작성하는게 더 나을 것 같습니다. <br> - 삭제: deleteTodo 함수에서 서버로 삭제 요청 |                                                |
| 박재우 | customAxios 파일로 Api 요청 부분을 분리. <br> - 생성(POST) : createTodosList로 url = /todos data = todo 로 전달 <br> - 읽기(GET) : getTodosList로 url = /todos 로 전달 <br> todo 페이지로 이동시 useEffect로 <br> —————————————————————————————— <br> loginAxios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('jwtToken')}`; <br> —————————————————————————————— <br> Authorization을 추가 한 후 실행 <br> - 수정(PUT) : updateTodoAxios로 url = /todos/${id} data = todo, isCompleted로 전달 <br> - 삭제(DELETE) : deleteTodoAxios url = /todos/${id} 로 전                                                                |                                                |
| 박하린 | [api 요청] <br> - axios instance 생성하여 api 요청 <br> - 토큰 필요한 instance인 경우 axios interceptors를 사용 <br> - 생성 : api/TodoApi 내의 createTodoApi를 요청, todoList에 response data 추가 <br> - 읽기 : /todo로 들어와서 Todo 페이지 렌더링 될 때 api/TodoApi 내의 getTodoApi를 요청, todoList setState <br> - 수정 : api/TodoApi 내의 updateTodoApi 요청하여 수정, map 메소드로 해당 객체 수정 <br> - 삭제 : api/TodoApi 내의 deleteTodoApi 요청하여 삭제, todoList filter하여 setState                                                                                                                                                        |                                                |

### 👍 Best Practice

- Axios 개별 파일 생성.
- 에러 부분 → catch 문에서 발생하는 에러 만 처리
- header → 다음 기회

---

<br>
<br>
<br>

## 컨벤션

| Feat :     | 새로운 기능 추가                                                                    |
| ---------- | ----------------------------------------------------------------------------------- |
| Fix :      | 버그 수정                                                                           |
| Docs :     | 문서 수정                                                                           |
| Style :    | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우                                   |
| Refactor : | 코드 리펙토링                                                                       |
| Test :     | 테스트(테스트 코드 추가, 수정, 삭제, 비즈니스 로직에 변경이 없는 경우)              |
| Chore :    | 위에 걸리지 않는 기타 변경사항 (빌드 스크립트 수정, assets image, 패키지 매니저 등) |
| Design :   | CSS 등 사용자 UI 디자인 변경                                                        |
| Comment :  | 필요한 주석 추가 및 변경                                                            |
| Init :     | 프로젝트 초기 생성                                                                  |
| Rename :   | 파일 혹은 폴더명 수정하거나 옮기는 경우                                             |
| Remove :   | 파일을 삭제하는 작업만 수행하는 경우                                                |

> 참고자료
>
> [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
>
> [[Git/GitHub] Commit Convention / 깃 커밋 컨벤션 사용](https://chlolisher.tistory.com/173)

---

<br>

## Eslint, prettier 규칙

- Eslint

  ```jsx
  // .eslintrc

  {
    "extends": ["react-app", "eslint:recommended", "prettier"],
  	"env": {
  	    "es6": true
  	  },
    "rules": {
      "no-var": "error", // var 금지
      "no-multiple-empty-lines": "error", // 여러 줄 공백 금지
      "eqeqeq": "error", // 일치 연산자 사용 필수
      "dot-notation": "error", // 가능하다면 dot notation 사용
      "no-unused-vars": "error" // 사용하지 않는 변수 금지
    }
  }
  ```

- Prettier

  ```jsx
  // .prettierrc.js

  module.exports = {
    printWidth: 100, // printWidth default 80 => 100 으로 변경
    singleQuote: true, // "" => ''
    arrowParens: 'avoid', // arrow function parameter가 하나일 경우 괄호 생략
  };
  ```
