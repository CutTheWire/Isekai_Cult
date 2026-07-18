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
    
    // 2. 메인 페이지(인덱스)에서만 기본 문명 그리드 렌더링
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPath === '' || currentPath === 'index.html') {
        renderCivilizationCards('civ-grid');
    }
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

function renderCivilizationCards(id) {
    const grid = document.getElementById(id);
    if (!grid) return;

    if (typeof civilizations === 'undefined') {
        grid.innerHTML = '<p>문명 데이터를 로드하지 못했습니다.</p>';
        return;
    }

    // compute asset base for images (same logic as characters page)
    const assetBase = (function() {
        const p = location.pathname;
        if (p.includes('/pages/')) return '../assets/images/characters/';
        return 'assets/images/characters/';
    })();

    grid.innerHTML = civilizations.map(civ => {
        const imgSrc = assetBase + encodeURIComponent(civ.imageFile);
        return `
        <div class="civ-card" data-name="${civ.name}" style="border-left-color: ${civ.colorVar};">
            <img src="${imgSrc}" alt="${civ.name}" class="civ-img" loading="lazy" />
            <div class="civ-body">
                <h3 style="color: ${civ.colorVar}; margin:0;">${civ.name}</h3>
                <p class="muted" style="margin:0;">${civ.theme}</p>
                <p class="muted" style="font-size:0.95rem; margin-top:0.5rem;">${civ.shortDescription}</p>
            </div>
        </div>
        `;
    }).join('');

    // 클릭 시 처리 (공통 동작)
    document.querySelectorAll(`#${id} .civ-card`).forEach(card => {
        card.addEventListener('click', () => {
            console.log('Selected civilization:', card.dataset.name);
        });
    });
}
