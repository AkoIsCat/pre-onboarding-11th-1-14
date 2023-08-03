# Best Practice 선정과정 목차

- [사용 라이브러리](#사용-라이브러리)

- [style](#스타일링)

- [배포](#배포)

- [폴더 구조](#폴더-구조)

- [협업 방법](#협업-방법)

- [유효성 검사](#유효성-검사)

- [로그인 여부에 따른 리다이렉트](#로그인-여부에-따른-리다이렉트)

- [Todo API](#todo-api-생성-읽기-수정-삭제)

<br>

## 사용 라이브러리

| 팀원   | 기능                                                                            |
| ------ | ------------------------------------------------------------------------------- |
| 김은혜 | React-router-dom, styled-components                                            |
| 박진현 | React-routet-dom, styled-components, axios                                       |
| 장윤신 | react-router-dom, styled-components, axios                                      |
| 한지윤 | react-router-dom, styled-components, axios                                      |
| 박재우 | 지정 라이브러리[ react, react-router-dom ], 추가 라이브러리[ axios, typescript] |
| 박하린 | axios 1.4.0, react-router-dom 6.13.0                                            |

### 👍 Best Practice

- react-router-dom, styled-components, axios, typescript, react-icon
  - CRA, react-router-dom은 과제 지정 기본 라이브러리
 - Axios vs Fetch
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
   
   => **차이점을 고려했을때 Axios가 더 좋다고 판단되어 Axios로 결정**
  - **typescript**
    - **타입의 안전성**

---

<br>

## 스타일링

| 팀원   | 기능                                 |
| ------ | ------------------------------------ |
| 김은혜 | Styled-components                    |
| 박진현 | Styled-components                    |
| 장윤신 | Styled-components                    |
| 한지윤 | Styled-components                    |
| 박재우 | css module                           |
| 박하린 | tailwindcss 3.3.2, react-icons 4.9.0 |

### 👍 Best Practice

- Styled-components
  - **javascript로 작성 가능**
  - **재사용성이 좋음**
  - **대다수의 팀원들이 사용했기 때문에 협업에 용이함**

---

<br>

## 배포

| 팀원   | 기능    |
| ------ | ------- |
| 김은혜 | netlify |
| 박진현 | netlify |
| 장윤신 | netlify |
| 한지윤 | vercel  |
| 박재우 | vercel  |
| 박하린 | vercel  |

### 👍 Best Practice

- vercel
  - **netlify 사용시 다른 페이지에서 새로고침시 404 에러 발생 → 이에 대한 추가 조치가 필요하기 때문에 vercel로 결정**

---

<br>

## 폴더 구조

| 팀원   | 폴더명                                             |
| ------ | -------------------------------------------------- |
| 김은혜 | component, page, store, api                        |
| 박진현 | components.apis,containers,lib,pages,tokens        |
| 장윤신 | components, pages, styles                          |
| 한지윤 | components, pages, shared                          |
| 박재우 | src → folder: assts, async, components, css, pages |
| 박하린 | api, components, pages, routes, utils              |

### 👍 Best Practice

```
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── Routers.tsx
│   ├── apis
│   │   ├── AxiosInstance.ts
│   │   ├── SignAxios.ts
│   │   └── TodoAxios.ts
│   ├── components
│   │   ├── Todo
│   │   │   ├── Todo.style.ts
│   │   │   ├── TodoCreate.tsx
│   │   │   ├── TodoItem.tsx
│   │   │   ├── TodoItemGroup.tsx
│   │   │   ├── TodoModify.tsx
│   │   │   └── TodoTrans.tsx
│   │   └── elements
│   │       ├── Button.tsx
│   │       └── InputField.tsx
│   ├── hooks
│   │   └── useValidation.tsx
│   ├── index.tsx
│   ├── pages
│   │   ├── Home.tsx
│   │   ├── Root.tsx
│   │   ├── SignIn.tsx
│   │   ├── SignUp.tsx
│   │   └── TodoList.tsx
│   ├── react-app-env.d.ts
│   └── styles
│       ├── GlobalStyles.tsx
│       ├── Layout.tsx
│       └── Sign.style.ts
└── tsconfig.json
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

| 팀원   | 의견                                                      |
| ------ | --------------------------------------------------------- |
| 김은혜 | 파트별로 분량을 정한 뒤에 하나의 애플리케이션으로 합침    |
| 박진현 | 파트별로 나눠서 기능 개발 후 Code 코드 리뷰 진행 후 merge |
| 장윤신 | 파일 별로 분담하여 하나의 레포지토리에 커밋               |
| 한지윤 | 파트별로 나눠서 합치기                                    |
| 박재우 | 1명이 코드를 짜고 의견 나눠서 한개 씩 완성                |
| 박하린 | 파트별로                                                  |

---

<br>

## 유효성 검사

| 팀원   | 기능                                                                                                                                                                                                                                                     |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 김은혜 | id와 password를 저장할 state와 유효성 체크 변수를 생성 후 if문을 이용해 id에 @가 포함되어 있는지, password가 8자리 이상인지 체크함. 별도 커스텀 훅 사용 X                                                                                                |
| 박진현 | lib/useValidation에서 유효성 검사를 진행하고 비 구조화 할당으로 email과 password의 상태를 전달받는다. <br> 1. email에는 includes를 사용하여 @ 있는지 여부를 판단하고 true/false 반환 <br> 2. password는 길이를 이용하여 검사하고 불리언 타입으로 반환    |
| 장윤신 | 1. input에 onChange 이벤트 삽입하여 state 변경 <br> 2. useEffect에서 email과 password가 바뀔때마다 검사 실행 <br> 3. 검사결과에 따라 button의 disabled 속성값 true/false로 변경                                                                          |
| 한지윤 | 유효성 검사가 필요한 컴포넌트(Signup, Signin)에 바로 작성 <br> - test() 사용하여 정규표현식 일치 여부에 따라 유효성 검사 <br> - onChangeHandler 이용해 입력 필드에서 값이 변경될 때마다 유효성 검사를 수행                                               |
| 박재우 | 1. 이메일 유효성 검사 → HTML5 기능 사용 브라우저에서 검사 type=”email” <br> 2. 비밀번호 길이 유효성 검사 → HTML5 기능 사용 브라우저에서 검사 minLength(8) <br>3. 버튼 disable 상태 변화 → onChange 이벤트에서 event.target.validity.valid 로 유효성 판단 |
| 박하린 | 1. utils 폴더에 validatinCheck 함수 따로 분리 <br> 2. Signup.js , Signin.js 페이지에서 함수 import 하여 유효성 검사 후, btnState 변경 <br> \* email, password의 input tag onChange 이벤트 발생할 때마다 함수 실행됩니다. <br> → useEffect                |

### 👍 Best Practice

- **커스텀훅 분리**(진현님 코드 참고) => **커스텀훅으로 분리해 유지보수에 도움을 줌**
- **메시지 출력(실시간)** => **사용자 UI 개선을 위함**
- **검사(이메일:@여부, 패스워드:8자 이상)**
- **버튼 disable 사용**

---

<br>

## 로그인 여부에 따른 리다이렉트

| 팀원   | 기능                                                                                                                                                                         |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 김은혜 | useEffect로 최초 렌더링 시 토큰 여부를 확인한 후 존재하면 todo 페이지로 바로 이동, <br> 토큰이 없는 상태로 todolist 페이지에 접근하려고 한다면 회원가입 페이지로 이동        |
| 박진현 | Container file이 아닌 page 파일에서 token 여부를 확인하여 첫 렌더링 시에 리다이렉트 처리 <br> api 통신 후 반환 받은 상태 코드에 따라 리다이렉트 처리                         |
| 장윤신 | 1. 로그인시 로컬스토리지에 로그인정보 저장 <br> 2. 페이지 마운트시 로컬스토리지 확인 <br> 3. react-router-dom의 Navigate 사용                                                |
| 한지윤 | react-router-dom의 BrowserRouter를 사용 <br> - Router 컴포넌트 내에서 accessToken 유무를 확인 <br> - Navigate 컴포넌트 속성 중 하나인 replace 를 사용하여 새로운 경로로 대체 |
| 박재우 | react-router-dom 기능인 loader 속성을 사용 로그인 여부에 따라 redirect 사용                                                                                                  |
| 박하린 | PrivateRoute 컴포넌트 구현하여 토큰 여부에 따라 리다이렉트 처리                                                                                                              |

### 👍 Best Practice

- loader 사용

  - **useEffect 시 해당 page Component의 UI가 표시되었다가 redirect 되는 현상 발생으로 인해 사용자 편의성이 좋지 않아 loader 사용 결정**
  - **loader를 통해 컴포넌트가 렌더링 되기 전에 검사**

| loader 사용 이미지                                                                                                                              | useEffect 사용 이미지                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Untitled](https://github.com/wanted-pre-onboarding-11th-14team/pre-onboarding-11th-1-14/assets/99275134/6b2d54fe-dc44-417d-8de6-b2e2998e9c12) | ![1111](https://github.com/wanted-pre-onboarding-11th-14team/pre-onboarding-11th-1-14/assets/73606877/54b7d592-68aa-452c-af6e-4b671ef6789a) |

---

<br>

## Todo API (생성, 읽기, 수정, 삭제)

| 팀원   | 기능                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 김은혜 | context api 사용, api 요청 분리 <br> - 생성 : 추가하는 api 요청 후 리듀서로 state에 추가. 스프레드 연산자를 사용해서 기존 배열에 추가 <br> - 읽기 : 투두 페이지 최초 렌더링 시 get api를 사용해 불러옴. 리듀서를 이용 해 컨텍스트 state에 할당. <br> - 수정 : api 요청에 수정된 값을 같이 요청 후 state 수정. state 배열을 map으로 순회하며 수정된 item의 id를 찾으면 수정된 내용을 변경 <br> - 삭제 : 해당 item의 id를 api와 같이 요청을 보내 삭제 후 state에서도 삭제. filter를 이용해 기존 item과 삭제할 item의 id를 대조해 id가 다른 경우에 배열에서 제외합니다.                      |
| 박진현 | apis/Api.js <br> Api.js에서 파일에서는 실질적으로 수행되는 api 통신 수행 <br> apis/apiClient.js <br> apiClient.js에서는 axios.create를 이용하였으며 반복되는 URL 주소와 ContentType등을 분리하여 재사용성을 고려함.                                                                                                                                                                                                                                                                                                                                                                       |
| 장윤신 | - 읽기 : useEffect 사용 todo 페이지 마운트시 getTodos(토큰) 실행 → setTodoList                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 한지윤 | - api 요청부분을 분리하지 않고 한 컴포넌트 내에서 요청 수행 <br> (생성, 읽기, 수정, 삭제의 api 요청부분이 전부 TodoList.jsx에 있습니다. 가독성 측면에서 좋지 않은 것 같습니다.) <br> - 생성: addTodo : 서버로 새로운 Todo를 보내준다.(POST) <br> - 읽기: fetchTodos : 서버에서 Todo 목록을 불러온다.(GET) <br> - 수정: toggleComplete, modifyTodo(PUT) <br> → 코드 중복을 줄이기 위해 toggleComplete 함수와 modifyTodo 함수의 중복 코드를 분리하여 재사용 가능한 함수로 작성하는게 더 나을 것 같습니다. <br> - 삭제: deleteTodo 함수에서 서버로 삭제 요청                                 |
| 박재우 | customAxios 파일로 Api 요청 부분을 분리. <br> - 생성(POST) : createTodosList로 url = /todos data = todo 로 전달 <br> - 읽기(GET) : getTodosList로 url = /todos 로 전달 <br> todo 페이지로 이동시 useEffect로 <br> —————————————————————————————— <br> loginAxios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('jwtToken')}`; <br> —————————————————————————————— <br> Authorization을 추가 한 후 실행 <br> - 수정(PUT) : updateTodoAxios로 url = /todos/${id} data = todo, isCompleted로 전달 <br> - 삭제(DELETE) : deleteTodoAxios url = /todos/${id} 로 전 |
| 박하린 | [api 요청] <br> - axios instance 생성하여 api 요청 <br> - 토큰 필요한 instance인 경우 axios interceptors를 사용 <br> - 생성 : api/TodoApi 내의 createTodoApi를 요청, todoList에 response data 추가 <br> - 읽기 : /todo로 들어와서 Todo 페이지 렌더링 될 때 api/TodoApi 내의 getTodoApi를 요청, todoList setState <br> - 수정 : api/TodoApi 내의 updateTodoApi 요청하여 수정, map 메소드로 해당 객체 수정 <br> - 삭제 : api/TodoApi 내의 deleteTodoApi 요청하여 삭제, todoList filter하여 setState                                                                                         |

### 👍 Best Practice

- **Axios 개별 파일 생성**
- 에러 부분 → **catch 문에서 발생하는 에러만 처리**
- header →  **axios interceptor를 통해 토큰 넣어주기**

---

<br>
<br>
<br>
