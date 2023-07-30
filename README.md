# 원티드 프리온보딩 11차 1주차 14팀 멘토 과제

![image](https://github.com/wanted-pre-onboarding-11th-14team/pre-onboarding-11th-3-14/assets/109052469/1c8eccee-5a37-46df-b810-d22fd375f4ba)

<br>

## About

<br>

<div align="center">
    <p> <a href="https://github.com/walking-sunset/selection-task">사전 과제</a>로 진행한 Todo List에서 동료학습을 통해 Best Practice를 만든 프로젝트입니다. </p>
    <a href="https://pre-onboarding-11th-1-14.vercel.app/"><strong>배포 링크</strong></a> | 
    <a href="https://rhetorical-fuel-734.notion.site/week-1-7ad75cb0565546caaaf9a31ccb6e4a20"><strong>Notion</strong></a>
</div>

<!-- [배포 링크](https://pre-onboarding-11th-1-14.vercel.app/) | [노션](https://www.notion.so/02987ad7d5244ced91e2c91ea40624dd) -->
<br />
<div align=center>2023.06.27 - 2023.06.30</div>

<br>

## Team

<div align='center'>
<table> 
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/yun-sin"><img src="https://avatars.githubusercontent.com/u/99275134?v=4"width=100px;" alt=""/><br /><sub><b>장윤신(팀장)</b></sub></a><br /></td>
      <td align="center";><a href="https://github.com/AkoIsCat"><img src="https://avatars.githubusercontent.com/u/109052469?v=4" width="100px;" alt=""/><br /><sub><b>김은혜</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/rondido"><img src="https://avatars.githubusercontent.com/u/55516901?v=4" width="100px;" alt=""/><br /><sub><b>박진현</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/jyhan14"><img src="https://avatars.githubusercontent.com/u/105530169?v=4" width="100px;" alt=""/><br /><sub><b>한지윤</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/codingjwp"><img src="https://avatars.githubusercontent.com/u/113403155?v=4" width="100px;" alt=""/><br /><sub><b>박재우</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/khakaa"><img src="https://avatars.githubusercontent.com/u/73606877?v=4" width="100px;" alt=""/><br /><sub><b>박하린</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>
</div>
<br>

<br>

## 기술 스택

<br>

<div align="center"> 
<img alt="react" src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img alt="typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
<img alt="react-router-dom" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
<img alt="axios" src ="https://img.shields.io/badge/axios-black.svg?&style=for-the-badge&logo=axios&logoColor=white"/>
<img alt="styled-component" src="https://img.shields.io/badge/styledComponents-DB7093?style=for-the-badge&logo=styledComponents&logoColor=white">
</div>

<br>
<br>

## 회의 히스토리

| 회의 | 일시       | 회의 내용                                                                                                                                                       |
| ---- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1차  | 6.27 18:45 | - 팀장 선정 (장윤신) <br> - 각자 사전 과제에서 구현한 기능들 중에서 Best Practice를 선별하기 위해 구현 기능을 문서화 해오기                                     |
| 2차  | 6.28 15:00 | - Best Practice 선별 <br> - Commit message, eslint, prettier 규칙 결정 <br> 협업 방법 결정 (파일별로 분배) <br> - 각자 브랜치 생성 후 각자 맡은 부분 구현해오기 |
| 3차  | 6.29 21:00 | - 각자 구현한 코드 PR & Merge 후 코드 재구성                                                                                                                    |
| 4차  | 6.30 17:30 | - Notion & Read me 수정 <br> - 코드 리팩토링 <br> - 배포                                                                                                        |

<br>


## 파트 분담

| 파트                          | 팀원       |
| ----------------------------- | ---------- |
| 프로젝트 셋팅, Home           | 재우       |
| 투두                          | 진현, 재우 |
| 로그인 /회원가입 /유효성 검사 | 은혜       |
| 라우터 - loader               | 지윤       |
| UI(디자인)                    | 하린       |
| api, 배포, READEME 작성       | 윤신       |

---

<br>
<br>

## Best Practice

| 팀원            | Best Practice                                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------------------------- |
| 사용 라이브러리 | Typescript, Styled-components, Axios, React-router-dom, React-icon, Eslint, Prettierrc, Husky                   |
| 폴더 구조       | [폴더 구조](#폴더-구조)                                                                                         |
| 배포            | vercel                                                                                                          |
| 유효성 검사     | • useValidation 커스텀훅 분리 <br> • 메시지 출력(실시간) <br> • 버튼 disabled                                   |
| 리다이렉트      | React-router-dom 기능인 loader 속성을 사용 <br> → 로그인 여부에 따라 redirect 사용                              |
| Todo API        | • Axios 개별 파일 생성 <br> • 에러 부분 → alert으로 처리 <br> • header → axios interceptor를 통해 토큰 넣어주기 |

---

<br />

## Best Practice 선정과정
[Best Practice 선정과정 들여다보기](./BestPractice.md)

<br />

## 서비스 소개

### 기능

- api 요청을 통한 로그인/회원가입 기능
- 로그인 성공 시 토큰을 로컬 스토리지에 저장
- Todo List 아이템 생성, 수정, 삭제 기능
- 아이템 완료 여부 기능

<br />

### 페이지

<div>

| Home Page       |   
| :-----------------------------------------------------------------------------------------------------------------------------------------------: |
| ![image](https://github.com/wanted-pre-onboarding-11th-14team/pre-onboarding-11th-3-14/assets/109052469/d11cb5c9-0e90-45ae-a211-40740b6db864) |

<br />

| Login/Logout Page       |   
| :-----------------------------------------------------------------------------------------------------------------------------------------------: |
| ![image](https://github.com/wanted-pre-onboarding-11th-14team/pre-onboarding-11th-3-14/assets/109052469/4f163685-a238-446e-a180-be47e96e4e6f) |

<br />

| Todo List Page       |   
| :-----------------------------------------------------------------------------------------------------------------------------------------------: |
| ![image](https://github.com/wanted-pre-onboarding-11th-14team/pre-onboarding-11th-3-14/assets/109052469/2d33e357-c621-4887-a1f2-5c8c31f12150) |

</div>

## 협업 규칙

### 컨벤션

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
| Code :     | 파일 내의 코드 작성                                                                 |
| Create :   | 파일 생성                                                                           |

> 참고자료
>
> [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
>
> [[Git/GitHub] Commit Convention / 깃 커밋 컨벤션 사용](https://chlolisher.tistory.com/173)

---

<br>

### Eslint prettier husky lint-staged 규칙

- Eslint

  ```JSON
  // .eslintrc

  {
    "extends": ["react-app", "eslint:recommended", "prettier"],
    "env": {
      "es6": true // es6 버전 설정
    },
    "rules": {
      "no-var": "error", // var 금지
      "no-multiple-empty-lines": "error", // 여러 줄 공백 금지
      "eqeqeq": "error", // 일치 연산자 사용 필수
      "no-unused-vars": "error" // 사용하지 않는 변수 금지
    }
  }
  ```

- Prettier

  ```JSON
  {
    "printWidth": 100,       // 기본 80 -> 100
    "jsxSingleQuote": true,  // jsx " -> '로 변환
    "bracketSameLine": true, // 태그 마지막 `>` 바로 뒤에 붙이기
    "singleQuote": true,     // " -> ' 로 변환
    "arrowParens": "avoid"   // 변수 1개 일시 () 없애기
  }

  ```

- husky

  ```bash
    pre-commit : npx lint-staged
    pre-pus: npm run lint
  ```

- lint-staged  
  `--cache`를 제외 -> lint-staged 자체가 수정된 것만 적용 되기 때문에 제외
  `git add .`는 10.0.0 버전 위로 부터는 쓰지 않아도 적용 되게 되어 삭제
  ```bash
    # package.json 추가
    "lint-staged": {
      "*.{ts,tsx}": [
        "prettier --write ."
      ]
    }
  ```
