/**
 * Isekai Cult - Main Logic
 * 세계관 소개 사이트의 동적 인터랙션을 담당합니다.
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Isekai Cult World Site Loaded');
    
    // 초기화 함수 호출
    initSite();
});

function initSite() {
    // 1. 네비게이션 활성화 상태 관리
    setupNavigation();
    
    // 2. 메인 페이지의 문명 그리드 렌더링 (2단계에서 데이터 연동 예정)
    renderCivilizationPreview();
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.currentTarget.classList.add('active');
        });
    });

    // 자동으로 현재 페이지에 맞는 메뉴에 .active 클래스 부여 (페이지 새로고침 시 적용)
    const currentPath = window.location.pathname.split('/').pop();
    navLinks.forEach(l => {
        const href = l.getAttribute('href');
        if (href && href.endsWith(currentPath)) {
            l.classList.add('active');
        }
    });
}

function renderCivilizationPreview() {
    const grid = document.getElementById('civ-grid');
    if (!grid) return;

    // data.js에서 가져온 실제 문명 데이터 사용
    if (typeof civilizations === 'undefined') {
        grid.innerHTML = '<p>문명 데이터를 로드하지 못했습니다.</p>';
        return;
    }

    grid.innerHTML = civilizations.map(civ => `
        <div class="civ-card" style="border-top: 4px solid ${civ.colorVar}; background: #222; padding: 2rem; border-radius: 10px; transition: 0.3s; cursor: pointer;" data-name="${civ.name}">
            <h3 style="color: ${civ.colorVar}">${civ.name}</h3>
            <p style="color: var(--text-muted)">${civ.theme}</p>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">${civ.description}</p>
        </div>
    `).join('');

    // 카드 호버 효과 및 클릭 시 상세 페이지 이동 (예시: world.html에 #anchor 사용)
    document.querySelectorAll('.civ-card').forEach(card => {
        card.addEventListener('mouseenter', () => card.style.transform = 'scale(1.05)');
        card.addEventListener('mouseleave', () => card.style.transform = 'scale(1)');
        card.addEventListener('click', () => {
            // 현재는 간단히 콘솔에 출력, 추후 상세 페이지 구현 가능
            console.log('Selected civilization:', card.dataset.name);
        });
    });
}
