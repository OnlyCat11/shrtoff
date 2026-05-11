# Youtube Shorts Remover

> `yt-shorts-remover` is a browser extension that automatically **redirects YouTube Shorts** to the standard video player.

> `yt-shorts-remover`는 **유튜브 쇼츠 영상**을 일반 영상 플레이어로 자동으로 **전환**하는 브라우저 확장 프로그램입니다.

## 주요 기능 (Features)

- 유튜브 쇼츠 접속 시 일반 비디오 플레이어로 자동 전환
- 타임 바 조절, 재생 속도 제어 등 일반 플레이어의 모든 기능 사용 가능

## 설치 방법 (Installation)

1. [Release](https://github.com/OnlyCat11/yt-shorts-remover/releases/latest)에서 파일을 다운로드 합니다.
2. 다운로드 한 파일을 압축 해제합니다.

<details>
<summary><b>Chrome</b></summary>

1. `chrome://extensions`에 접속합니다.
2. 우측 상단에서 **'개발자 모드'** 를 활성화합니다.
3. **'압축해제된 확장 프로그램 로드'** 에서 압축 해제한 폴더를 선택합니다.
</details>

<details>
<summary><b>Edge</b></summary>

1. `edge://extensions`에 접속합니다.
2. 왼쪽 사이드바에서 **'개발자 모드'** 를 활성화합니다.
3. **'압축 풀린 파일 로드'** 에서 압축 해제한 폴더를 선택합니다.
</details>

## 프로젝트 구조 (Project Structure)

```text
yt-shorts-remover/
├── LICENSE                # 라이선스 파일 (MIT)
├── README.md              # 프로젝트 설명서
├── background.js          # SPA 내부 이동 감지 및 리다이렉트 (스크립트 레벨)
├── manifest.json          # 확장 프로그램 메타데이터
└── rules.json             # 리다이렉트 규칙 (네트워크 레벨)
```
