# MOVIE

브라우저에서 감상하는 3D 영화 컬렉션. 간단한 소개와 장면 미리보기를 카드로 모았습니다.

- 메인: `index.html`
- 첫 상영작: `interstellar/index.html` — 4분, WebGL 2, Suno BGM 6곡, Gemini 대사 27개
- 배포: GitHub Pages, `main` 브랜치 루트

## 새 영화 추가

1. `새작품/index.html`에 완성 HTML을 넣습니다.
2. 실제 장면 미리보기를 `assets/`에 넣습니다.
3. `assets/movies.js`의 `MOVIES` 배열에 한 항목을 추가합니다. 기존 항목을 복사하고 제목, 소개, 이미지, 상대 경로, 재생 시간 등을 변경하세요.

카드 수와 배치는 자동으로 갱신됩니다. 카드를 누르면 해당 작품의 별도 페이지로 이동합니다. 첫 작품은 JavaScript가 없어도 기본 카드 링크가 표시됩니다.

## 음향

음악과 음성의 Cloudinary URL 및 출처는 `assets/interstellar-media.json`에 기록했습니다. 실제 영화 HTML에도 같은 설정이 들어 있습니다. 음원을 수정하면 양쪽 설정을 함께 갱신하세요.

1. Warmth in the Void — 사용자가 지정한 첫 클립
2. Nearing the Planet — 사용자가 지정한 클립
3. Mountains of Water — GPT 지침으로 Suno 생성
4. Match the Spin — GPT 지침으로 Suno 생성
5. The Last Burn — GPT 지침으로 Suno 생성
6. A Message Home — GPT 지침으로 Suno 생성

음악은 실제 사용하는 구간만 잘라 총 약 4.46MB로 제공하며 피치를 유지합니다. 장면 경계에는 페이드를 적용합니다.

Gemini Voice Studio 배역: Cooper/Algenib, Brand/Leda, TARS/Schedar, Romilly/Charon. 쿠퍼의 대사 18개는 낮고 거친 성인 남성 음색으로 다시 생성하고, 파도와 도킹에서는 다급한 연기, 후반부에서는 절제된 감정으로 연출했습니다. 대사 27개는 긴 무음 구간을 제외한 약 77초짜리 오디오 스프라이트로 저장합니다. 각 대사는 같은 Web Audio 시계에서 원래 장면 시점에 예약되므로 재생·일시정지·탐색이 동기화됩니다.

밀러 행성의 파도 효과음은 Suno Sounds에서 생성했습니다. 01:16부터 01:48까지 접근과 탈출에 맞춰 재생하며, 대사 중에는 효과음도 낮아집니다. 원본 링크는 음향 설정 파일에 기록돼 있습니다.

기본 렌더링은 30fps와 자동 해상도를 사용하며, 일시정지·시작 화면·숨긴 탭에서는 반복 렌더링을 멈춥니다. 저사양 모드에서는 반사·그림자·입자·블룸 연산을 줄입니다. 고화질 선택 시 60fps를 목표로 합니다. 음향은 두 파일씩 읽어 한꺼번에 디코딩하는 부담을 줄입니다.

음향은 최초 감상 시 네트워크가 필요합니다. 로드 실패 시 재시도 또는 무음 감상이 가능합니다. 대사 중 음악을 낮추며 음악/대사 음량을 따로 조절할 수 있습니다. 비공식 트리뷰트이며 원작의 영상·배우 음성·원본 사운드트랙을 사용하지 않습니다.

## 로컬 확인

`python -m http.server 8765` 실행 후 `http://localhost:8765/`를 엽니다.

미리보기는 `/interstellar/?freeze=1&t=163&hideui=1&capture=1&q=high`에서 실제 렌더링 장면을 저장했습니다. `capture=1`일 때만 미리보기 저장 버튼이 표시됩니다.
