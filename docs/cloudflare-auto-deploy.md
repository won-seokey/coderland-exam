# 기존 Cloudflare 사이트에 GitHub 자동 배포 연결

대상 저장소: `won-seokey/coderland-exam`
배포 브랜치: `main`
기존 Worker: `patient-glitter-8453`
사이트: https://patient-glitter-8453.wonseokey.workers.dev/

저장소에는 Wrangler 버전과 의존성 잠금 파일, Node 버전, 정적 파일 위치, 검사·배포 명령이 준비되어 있습니다. **Cloudflare의 GitHub 접근 허용과 Worker의 저장소 연결은 계정 소유자가 대시보드에서 한 번 설정해야 합니다. 파일을 push한 것만으로 이 연결이 생성되지는 않습니다.**

## 한 번만 설정

1. [Cloudflare 대시보드](https://dash.cloudflare.com/)에 로그인합니다.
2. **Workers & Pages → 기존 `patient-glitter-8453` Worker**를 선택합니다.
3. **Settings → Builds**(UI에 따라 Build)에서 **Connect**를 누릅니다.
4. GitHub 계정을 연결하고 Cloudflare GitHub 앱이 `won-seokey/coderland-exam`에 접근하도록 허용합니다. 저장소가 목록에 없으면 앱의 저장소 접근 목록에 추가합니다.
5. 다음 값으로 연결을 저장합니다.

| 항목 | 값 |
|---|---|
| Git repository | `won-seokey/coderland-exam` |
| Production branch | `main` |
| Root directory / Path | `/` — 저장소 최상위 |
| Build command | `npm run build` |
| Deploy command | `npm run deploy` |
| Node 버전 | 저장소 `.node-version`의 `22` |
| 정적 파일 디렉토리 | `public` — `wrangler.jsonc`에 이미 설정 |
| Preview / non-production branch builds | 필요 없다면 비활성화 |

`public`은 사이트 파일 위치이며 **Root directory는 `public`이 아닙니다.** `package.json`과 `wrangler.jsonc`가 있는 저장소 최상위를 빌드 루트로 사용합니다.

Cloudflare가 lockfile을 읽어 의존성을 설치한 뒤 빌드·배포 명령을 실행합니다. 대시보드가 인증용 Build API token을 요구하면 Cloudflare가 제시하는 생성/선택 기능을 사용합니다. 이 토큰이나 계정 인증 정보를 GitHub 저장소나 채팅에 붙여넣지 않습니다.

## 연결 확인

연결 직후 빌드가 시작되면 로그를 확인합니다. 시작되지 않으면 연결을 저장한 뒤 `main`에 새 커밋을 push하거나 대시보드의 빌드 재실행 기능으로 확인합니다.

정상 흐름:

```text
main 커밋·push
  → Cloudflare Workers Builds
  → 의존성 설치
  → npm run build (파일·문제·테스트 데이터 검사)
  → npm run deploy (고정 버전 Wrangler로 기존 Worker 배포)
  → 기존 workers.dev 주소에 반영
```

빌드 화면의 커밋 SHA가 GitHub `main`의 최신 커밋과 같고 빌드·배포가 성공했는지 확인합니다. 이후 기존 사이트를 새로고침해 문제 목록과 예제 실행을 확인합니다. 로컬에서 생성한 ZIP은 이 자동 배포 과정에 필요 없습니다.

## 변경 작업

```sh
npm ci
npm run dev
# public/ 파일 수정
npm run build
git add public
git commit -m "Update programming exercises"
git push origin main
```

패키지나 설정 파일을 바꿨다면 해당 파일도 커밋합니다. `package-lock.json`도 Git에 유지합니다. `wrangler.jsonc`의 Worker 이름을 바꾸면 다른 Worker를 대상으로 하므로 기존 사이트를 유지하려면 이름을 그대로 둡니다.

## 로컬 배포 구성 검사

```sh
npm ci
npm run build
npm run deploy -- --dry-run
```

`--dry-run`은 구성만 검사하며 실제 사이트를 배포하거나 GitHub 연결을 만들지 않습니다. GitHub 저장소 연결과 실제 빌드 성공 여부는 Cloudflare 대시보드에서 확인해야 합니다.

공식 문서: [기존 Worker의 Git 연동](https://developers.cloudflare.com/workers/ci-cd/builds/), [빌드 설정](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/), [브랜치 설정](https://developers.cloudflare.com/workers/ci-cd/builds/build-branches/).
