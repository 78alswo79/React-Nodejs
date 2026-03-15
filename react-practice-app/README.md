```
Vite 리액트 설치 및 실행 단계
프로젝트 생성
터미널에서 아래 명령어를 입력하여 프로젝트 뼈대를 만듭니다.

Bash
npm create vite@latest [프로젝트이름] -- --template react
cd [프로젝트이름]
```

```
Bash
npm install  >>> 의존성(라이브러리) 설치. package.json에 명시된 필수 도구들을 node_modules 폴더에 설치합니다.
```

```
Bash
npm run dev
🛠 관리자 권한 및 에러 대응 (꿀팁)
윈도우 환경에서 보안 정책(Execution Policy)으로 인해 npm 스크립트 실행이 막히는 경우가 많습니다. 이럴 때는 관리자 권한으로 파워쉘(PowerShell)을 열고 아래 명령어를 한 번만 실행해 주면 해결됩니다.
```

```
PowerShell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```
