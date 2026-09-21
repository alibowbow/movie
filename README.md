# MOVIE

브라우저에서 감상하는 3D 영화 컬렉션. `alibowbow/jev`의 간결한 컬렉션 구성과 색감을 참고했습니다.

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

긴 곡의 마지막 구간을 3~6번 장면에 맞춰 사용합니다. 음악의 피치는 바꾸지 않고 장면 경계에 페이드를 적용합니다.

Gemini Voice Studio 배역: Cooper/Fenrir, Brand/Leda, TARS/Schedar, Romilly/Charon. 원본 HTML의 독창적인 영어 대사 27개를 합성한 뒤 자막 시점에 배치했습니다. TARS의 한 대사는 자막 길이에 맞춰 피치를 유지한 채 1.216배로 조정했습니다. 대사 타임라인은 240초 음성 트랙 하나로 저장하고 영상·효과음·음악과 같은 Web Audio 시계를 사용합니다. 재생, 일시정지, 탐색 때 함께 동기화됩니다.

음향은 최초 감상 시 네트워크가 필요합니다. 로드 실패 시 재시도 또는 무음 감상이 가능합니다. 대사 중 음악을 낮추며 음악/대사 음량을 따로 조절할 수 있습니다. 비공식 트리뷰트이며 원작의 영상·배우 음성·원본 사운드트랙을 사용하지 않습니다.

## 로컬 확인

`python -m http.server 8765` 실행 후 `http://localhost:8765/`를 엽니다.

미리보기는 `/interstellar/?freeze=1&t=163&hideui=1&capture=1&q=high`에서 실제 렌더링 장면을 저장했습니다. `capture=1`일 때만 미리보기 저장 버튼이 표시됩니다.
