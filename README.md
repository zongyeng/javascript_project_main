### What's included

Within the download you'll find the following directories and files:

```
javascript_project_main
    ├── packages
    │   ├── app_react
    │   │   └── package.json
    │   ├── server_express
    │   │   └── package.json
    │   └── web_react
    │       └── package.json
    ├── nodejs
    ├── node_modules(no version control)
    ├── npm-cache(no version control)
    ├── .gitignore
    ├── .npmrc
    ├── package.json
    └── README.md
```
* * *
# 프로젝트 환경 설정 가이드
### 0. 개요
> 환영합니다! 형상관리에 원활하게 접속하셨군요!   
> 위 프로젝트는 javascript로 동작하는 모듈들을 묶어 놓았습니다. app_react는 react_native 프로젝트, server_express는 express모듈을 활용한 node서버, web_react는 react입니다. 각 프로젝트의 package.json들을 참고하시면 실행에 도움이 되실거라 생각합니다. 해당 문서에서는 vscode에서의 실행에대해 설명하며, IntelliJ에서 개발을 권장 드립니다.

### 1. 사용 프로그램
> 해당 문서 및 프로젝트는 window에 접합하게 만들어 졌습니다.
> - nodejs v16.13.0 (${프로젝트_루트}/nodejs)
> - node_modules경로 \${프로젝트_루트}/node_modules (${프로젝트_루트}/.npmrc 에 의한 경로)
> - npm-cache경로 \${프로젝트_루트}/npm-cache (${프로젝트_루트}/.npmrc 에 의한 경로)
> - node_modules는 형상관리 페이지에서 다운로드 받아서 해당 경로에 넣어 주시기 바랍니다.
> - **node offline 설정 or repository url 변경**을 안했기 때문에 해당 모듈이 없다면 오류가 발생 합니다.
### 1. .vscode 폴더
> launch.json 및 tasks.json이 작성되어 있으며 server_express와 web_react 실행에 대한 파일입니다. .gitignore에 의해 commit 제한 되어있습니다

### 2. npm install
> 터미널을 열어 ./nodejs/npm install 명령을 실행시켜 줏 package-lock.json
