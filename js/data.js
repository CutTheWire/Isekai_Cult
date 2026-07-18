/**
 * Isekai Cult - World Data
 * 5대 문명(인간/수인, 드워프, 엘프, 오크, 용족)의 기본 정보.
 * 실제 사이트에서는 이 데이터를 기반으로 동적 렌더링을 수행합니다.
 */

// 각 문명에 대한 메타데이터
const civilizations = [
    {
        id: 'human',
        name: '인간 & 수인',
        alias: 'Human-Beast Alliance',
        theme: 'Dieselpunk',
        colorVar: 'var(--color-human)',
        shortDescription: '거대한 내연기관과 화석연료의 힘으로 움직이는 역동적이고 활기찬 산업 문명.',
        imageFile: '인간&수인.png',
        mdPath: 'data/markdown/human.md'
    },
    {
        id: 'dwarf',
        name: '드워프',
        alias: 'Dwarf',
        theme: 'Steampunk',
        colorVar: 'var(--color-dwarf)',
        shortDescription: '황동 톱니바퀴와 하얀 증기 압력으로 작동하는 전통적인 아날로그 기계 문명.',
        imageFile: '드워프.png',
        mdPath: 'data/markdown/dwarf.md'
    },
    {
        id: 'elf',
        name: '엘프',
        alias: 'Elf',
        theme: 'Cyberpunk',
        colorVar: 'var(--color-elf)',
        shortDescription: '홀로그램과 AI 마스코트가 일상을 편리하게 하는 최첨단 디지털 문명.',
        imageFile: '엘프.jpeg',
        mdPath: 'data/markdown/elf.md'
    },
    {
        id: 'orc',
        name: '오크',
        alias: 'Orc',
        theme: 'Biopunk',
        colorVar: 'var(--color-orc)',
        shortDescription: 'DNA 조작과 살아있는 유기체를 가공해 기술을 대체하는 친환경 생체 문명.',
        imageFile: '오크.jpeg',
        mdPath: 'data/markdown/orc.md'
    },
    {
        id: 'dragon',
        name: '용족',
        alias: 'Dragonkin',
        theme: 'Magic',
        colorVar: 'var(--color-dragon)',
        shortDescription: '순수한 마나와 비전 마법, 고대 룬 문자를 사용하는 우아한 마법 문명.',
        imageFile: '용족.png',
        mdPath: 'data/markdown/dragon.md'
    }
];

// 비동기로 마크다운을 로드해서 각 문명 항목에 detailMarkdown을 채워 넣음
async function loadCivilizationMarkdowns(){
    const base = (function(){
        const p = location.pathname;
        if (p.includes('/pages/')) return '../';
        return '';
    })();

    for (const civ of civilizations){
        try {
            const res = await fetch(base + civ.mdPath);
            if (!res.ok) {
                civ.detailMarkdown = '';
                console.warn('Failed to load', civ.mdPath);
                continue;
            }
            civ.detailMarkdown = await res.text();
        } catch (err) {
            civ.detailMarkdown = '';
            console.error('Error loading md for', civ.id, err);
        }
    }

    return civilizations;
}

// Expose as globals: metadata immediately, 그리고 로드 완료를 기다리는 프로미스
window.civilizations = civilizations;
window.civilizationsReady = loadCivilizationMarkdowns();
