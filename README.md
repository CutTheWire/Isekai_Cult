# Isekai Cult Simulation

## 소개
이 프로젝트는 **GitHub Pages**를 통해 배포되는 **이세계 교단 운영 시뮬레이션** 웹사이트입니다. 5대 문명(인간·수인, 드워프, 엘프, 오크, 용족)이 교차하는 세계관을 배경으로, 사용자는 교단의 최고 지도자로서 다양한 정책을 내리고 시뮬레이션을 진행합니다.

## 주요 기능
- **세계관 페이지**: 5대 문명의 개요와 특징을 카드 형태로 제공
- **종족 도감**: 각 종족의 이미지와 상세 설명을 확인 가능
- **시스템 가이드**: 시뮬레이션 규칙·핵심 요소를 한눈에 정리
- **반응형 디자인**: 모바일·태블릿에서도 최적화된 UI 제공
- **Fade‑In 애니메이션**: 동적으로 로드되는 카드에 부드러운 전환 효과 적용
- **접근성**: ARIA 역할 및 lazy‑loading을 통해 사용자 경험 향상

## 프로젝트 구조
```
Isekai_Cult/
├─ assets/                # 이미지·폰트·사운드 등 정적 리소스
│   ├─ images/
│   │   ├─ backgrounds/
│   │   ├─ characters/
│   │   └─ icons/
│   ├─ fonts/
│   └─ sounds/
├─ css/                   # 전역 스타일시트 (style.css)
├─ js/                    # 데이터와 메인 로직 (data.js, main.js)
├─ pages/                 # 상세 페이지 (world.html, characters.html, system.html)
├─ .github/workflows/     # GitHub Pages 자동 배포 워크플로우
├─ index.html             # 메인 랜딩 페이지
└─ README.md              # 프로젝트 소개 (현재 파일)
```

## 로컬 개발 방법
1. **레포지터리 클론**
	```bash
	git clone https://github.com/CutTheWire/Isekai_Cult.git
	cd Isekai_Cult
	```
2. **정적 파일을 바로 열기**
	- `index.html`을 브라우저에서 열면 로컬에서도 사이트를 확인할 수 있습니다.
	- 별도의 빌드 도구가 필요 없으며, 순수 HTML/CSS/JS 로 구성되어 있습니다.

## 배포 (GitHub Pages)
이 레포는 **GitHub Actions** 워크플로우(`.github/workflows/gh-pages.yml`)를 통해 `main` 브랜치에 푸시될 때마다 자동으로 GitHub Pages에 배포됩니다.

1. **GitHub Pages 설정**
	- 레포지터리 Settings → Pages → Source를 `GitHub Actions` 로 선택합니다.
2. **배포 확인**
	- 푸시 후 `Actions` 탭에서 워크플로우가 성공적으로 실행되면, `https://<username>.github.io/Isekai_Cult/` 에서 사이트를 확인할 수 있습니다.

## 기여 방법
1. Fork 레포지터리
2. 새로운 브랜치 생성 (`git checkout -b feature/your-feature`)
3. 변경 사항 커밋 및 푸시 (`git push origin feature/your-feature`)
4. Pull Request 생성

## 라이선스
이 프로젝트는 **MIT License** 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참고하세요.