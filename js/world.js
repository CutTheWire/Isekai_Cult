// Page-specific script for pages/world.html

async function renderWorldMarkdown(){
    const target = document.getElementById('world-markdown');
    if (!target) return;

    try {
        // compute correct relative path depending on location
        const base = (function(){
            const p = location.pathname;
            if (p.includes('/pages/')) return '../data/';
            return 'data/';
        })();

        const res = await fetch(base + 'world.md');
        if (!res.ok) throw new Error('failed to load world.md');
        const md = await res.text();
        target.innerHTML = marked.parse(md);
    } catch (err) {
        target.textContent = '세계관 내용을 불러오지 못했습니다.';
        console.error(err);
    }
}

function setupWorldHero(){
    // select image inside the hero container (class selector for flexibility)
    const heroImg = document.querySelector('.world-hero img');
    if (!heroImg) return;

    const assetBase = (function() {
        const p = location.pathname;
        if (p.includes('/pages/')) return '../assets/images/backgrounds/';
        return 'assets/images/backgrounds/';
    })();

    heroImg.src = assetBase + encodeURIComponent('세계.png');
    heroImg.alt = '세계 지도';
    // make image responsive and centered
    heroImg.style.width = '75%';
    heroImg.style.display = 'block';
    heroImg.style.margin = '0 auto'; // center horizontally
    heroImg.style.borderRadius = '8px';
}

document.addEventListener('DOMContentLoaded', () => {
    // reuse common renderer if available
    if (typeof renderCivilizationCards === 'function') {
        renderCivilizationCards('civ-grid');
    }

    setupWorldHero();
    renderWorldMarkdown();
});