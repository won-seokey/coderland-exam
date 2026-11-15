# Coderland Exam

Python·C++ 문제 풀이와 브라우저 자동 채점 사이트입니다. 언어별 초급 20·중급 20·고급 15·심화 10문제, 총 130문제를 제공합니다.

## 파일 구성

```text
public/          웹사이트 실행 파일, 문제·테스트 데이터, Python/C++ 엔진과 라이선스
docs/            사용 안내
scripts/         로컬 서버, 정적 검사, 배포 ZIP 생성
releases/        생성한 배포 ZIP (Git에서 제외)
wrangler.jsonc   기존 Cloudflare Worker 배포 설정
```

`코더랜드_교재`와 파이썬 총정리 강의 자료는 저장소 밖에 유지합니다. `public/cpp-runtime-*.js`와 `public/python-runtime.js`는 채점에 필요한 번들이므로 Git에도 포함해야 합니다. 각 파일은 25MiB 미만이며 Git LFS는 사용하지 않습니다.

## 로컬 개발

Node.js 22.12 이상을 사용합니다. 처음 clone한 뒤 `npm ci`로 고정된 개발·배포 도구를 설치합니다. 로컬 서버 자체는 외부 패키지 없이 실행합니다.

```sh
npm ci
npm run dev
```

브라우저에서 `http://127.0.0.1:4173`을 엽니다. `public/` 파일을 수정하고 새로고침합니다. 포트 변경은 `PORT` 환경 변수를 사용합니다. `public/index.html`을 직접 여는 오프라인 실행도 가능합니다.

```sh
npm run check
```

실행 파일 누락, JavaScript 문법, 언어별 문제 수·배점, 문제별 테스트 개수와 파일 크기를 검사합니다. 실제 Python/C++ 실행 검사는 브라우저의 예제 실행·전체 채점으로 확인합니다.

## 수정 위치

- 화면·동작: `public/index.html`, `app.js`, `styles.css`, `workspace.css`
- 코드 편집기: `public/editor.js`, `editor-tools.js`, `workspace-ui.js`
- Python 문제·정답 예시: `public/problems.js`
- C++ 문제·정답 예시: `public/cpp-problems.js`
- 테스트 입력·기대 출력: `public/judge-cases.js`, `cpp-judge-cases.js`
- 채점 실행: `public/assessment-runner.js`, `judge.js`, `cpp-judge.js`

현재 폴더에 남아 있던 실행 소스와 생성된 문제 데이터를 이전했습니다. 이전 별도 문제 생성기·검증 스크립트는 이 저장소에 포함되어 있지 않습니다. 문제를 수정할 때 입력·출력·예제·해설·테스트를 함께 맞추고, 의미가 바뀌면 해당 문제의 `caseVersion`을 갱신하세요. 기존 문제 ID와 브라우저 저장 키를 임의로 바꾸면 학생 풀이 기록에 영향을 줄 수 있습니다.

## Cloudflare 배포

`wrangler.jsonc`는 기존 주소 `patient-glitter-8453.wonseokey.workers.dev`의 Worker 이름과 `public/` 정적 파일 폴더를 설정했습니다. 실제 배포 대상이 다른 경우 `name`을 해당 Worker 이름에 맞춰 수정하세요. 계정 ID와 인증 토큰은 저장소에 넣지 않습니다.

자동 배포는 **기존 Worker → Settings → Builds → Connect**에서 `won-seokey/coderland-exam`을 한 번 연결합니다.

| 설정 | 값 |
|---|---|
| Production branch | `main` |
| Root directory | `/` (저장소 최상위) |
| Build command | `npm run build` |
| Deploy command | `npm run deploy` |
| Assets directory | `public` (Wrangler 설정에 포함) |

이후 `main` push마다 문제·실행 파일 검사 후 기존 Worker에 배포합니다. 계정 소유자의 GitHub 접근 허용과 연결 저장이 완료되어야 작동합니다. [연결 방법·검증 절차](docs/cloudflare-auto-deploy.md)에 설정 화면의 입력값을 정리했습니다.

로컬에서 수동 배포하거나 구성을 검사할 때:

```sh
npm ci
npm run build
npm run deploy -- --dry-run
# 실제 수동 배포가 필요할 때만:
npx wrangler login
npm run deploy
```

Wrangler는 `package.json`에 정확한 버전으로 고정하고 `package-lock.json`으로 관리합니다. `npm run build`는 정적 사이트의 파일·문제 데이터 검사이며 별도의 번들 생성은 없습니다.

공식 설정 참고: [Workers 정적 파일 설정](https://developers.cloudflare.com/workers/static-assets/binding/), [Wrangler 설정](https://developers.cloudflare.com/workers/wrangler/configuration/).

## 수동 업로드 ZIP

Python 3가 설치된 환경에서:

```sh
npm run package
```

`releases/프로그래밍_실력테스트_웹배포용.zip`을 생성합니다. 압축 안의 파일이 배포 폴더 최상위에 위치합니다. ZIP을 풀고 전체 파일을 기존 Cloudflare 프로젝트에 업로드하세요. ZIP은 원본 파일의 중복 산출물이므로 Git에서 제외합니다.

[사이트 사용 안내](docs/프로그래밍_실력테스트_사용안내.md)

Python·C++ 런타임의 원저작권과 라이선스는 `public/*runtime.LICENSE.txt`에 있습니다.
