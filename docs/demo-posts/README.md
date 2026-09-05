# 데모 글 보관함

Fuwari 템플릿에 원래 들어있던 예시 글들이다. 마크다운 문법, 코드 블록,
콜아웃 박스, 동영상 삽입 같은 기능을 어떻게 쓰는지 보여주는 자료라
나중에 참고하려고 지우지 않고 여기로 옮겨뒀다.

이 폴더는 `src/content/posts/` 밖이라 사이트에는 나오지 않는다.

| 파일 | 참고할 내용 |
|---|---|
| `markdown.md` | 기본 마크다운 문법 |
| `markdown-extended.md` | 콜아웃 박스(`:::note`), GitHub 카드 등 확장 문법 |
| `expressive-code.md` | 코드 블록 옵션 (줄 강조, 파일명, 접기) |
| `video.md` | 유튜브 등 동영상 삽입 |
| `draft.md` | `draft: true` 로 글 숨기기 |
| `guide/` | 템플릿 전반 사용법. 표지 이미지가 있는 글의 폴더 구조 예시이기도 하다 |

다시 사이트에 띄우고 싶으면 해당 파일을 `src/content/posts/` 로 옮기면 된다.
`guide/` 는 `index.md` 가 표지 이미지 `cover.jpeg` 를 `./cover.jpeg` 로
참조하므로 폴더째 옮겨야 한다.
