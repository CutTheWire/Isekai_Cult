/**
 * Isekai Cult - World Data
 * 5대 문명(인간/수인, 드워프, 엘프, 오크, 용족)의 기본 정보.
 * 실제 사이트에서는 이 데이터를 기반으로 동적 렌더링을 수행합니다.
 */

const civilizations = [
    {
        name: '인간 & 수인',
        alias: 'Human-Beast Alliance',
        theme: 'Dieselpunk',
        colorVar: 'var(--color-human)',
        description: '거대한 내연기관과 화석연료의 힘으로 움직이는 역동적인 산업 문명. 실용적인 가죽 코트와 리벳이 박힌 강철 장갑, 대구경 화기와 궤도 열차가 특징.',
        image: '/api/v1/images/repository/Isekai/human.jpg'
    },
    {
        name: '드워프',
        alias: 'Dwarf',
        theme: 'Steampunk',
        colorVar: 'var(--color-dwarf)',
        description: '황동 톱니바퀴와 증기 압력으로 구동되는 전통적인 아날로그 기계 문명. 기름때 묻은 가죽 작업복과 황동 파이프가 특징.',
        image: '/api/v1/images/repository/Isekai/dwarf.jpg'
    },
    {
        name: '엘프',
        alias: 'Elf',
        theme: 'Cyberpunk',
        colorVar: 'var(--color-elf)',
        description: '홀로그램과 인공지능, 초고속 네트워크가 지배하는 최첨단 디지털 문명. 네온 장식 로브와 사이버 모노 와이어가 특징.',
        image: '/api/v1/images/repository/Isekai/elf.jpg'
    },
    {
        name: '오크',
        alias: 'Orc',
        theme: 'Biopunk',
        colorVar: 'var(--color-orc)',
        description: 'DNA 조작과 살아있는 유기체를 가공해 기술을 대체하는 생체 문명. 꿈틀거리는 근육 조직으로 만든 무기와 산성 액체 총기가 특징.',
        image: '/api/v1/images/repository/Isekai/orc.jpg'
    },
    {
        name: '용족',
        alias: 'Dragonkin',
        theme: 'Magic',
        colorVar: 'var(--color-dragon)',
        description: '순수한 마나와 비전 마법, 고대 룬 문자를 사용하는 우아한 마법 문명. 마법 지팡이와 원소 마법이 특징.',
        image: '/api/v1/images/repository/Isekai/dragon.jpg'
    }
];

// Expose as a global variable for non‑module scripts
window.civilizations = civilizations;
