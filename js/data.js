/**
 * Isekai Cult - World Data
 * 5대 문명(인간/수인, 드워프, 엘프, 오크, 용족)의 기본 정보.
 * 실제 사이트에서는 이 데이터를 기반으로 동적 렌더링을 수행합니다.
 */

// 각 문명에 대한 간단 요약(`shortDescription`)과 마크다운 형식의 상세 설명(`detailMarkdown`)을 분리합니다.
const civilizations = [
    {
        name: '인간 & 수인',
        alias: 'Human-Beast Alliance',
        theme: 'Dieselpunk',
        colorVar: 'var(--color-human)',
        // 세계관 페이지에 표시할 간단 설명 (첫 번째 문단)
        shortDescription: '거대한 내연기관과 화석연료의 힘으로 움직이는 역동적이고 활기찬 산업 문명.',
        // 종족 도감에 표시할 마크다운 형식 상세 설명
        detailMarkdown: `### 개념\n거대한 내연기관과 화석연료의 힘으로 움직이는 역동적이고 활기찬 산업 문명. 웅장한 기차 소리와 부지런한 활기가 가득합니다.\n\n### 외견/장비\n실용적인 가죽 코트와 리벳이 튼튼하게 박힌 강철 장갑, 대륙 곳곳을 여행하고 물자를 나르는 육중한 전차와 칙칙폭폭 소리를 내는 대구경 궤도 열차, 축제나 호신용으로 쓰이는 대구경 화기.\n\n### 문화\n대량 생산과 효율성을 중시하며, 함께 땀 흘려 일하는 즐거움을 아는 산업 사회. 회색빛 도시는 매연이 조금 나지만, 퇴근 후 광장에서 활기찬 축제를 즐기고, 인간과 수인은 파트너 연합으로서 엘프와도 교제합니다.`,
        // 이미지 파일명만 보관; 실제 경로는 렌더러에서 계산하여 조합합니다.
        imageFile: '인간&수인.png'
    },
    {
        name: '드워프',
        alias: 'Dwarf',
        theme: 'Steampunk',
        colorVar: 'var(--color-dwarf)',
        shortDescription: '황동 톱니바퀴와 하얀 증기 압력으로 작동하는 전통적인 아날로그 기계 문명.',
        detailMarkdown: `### 개념\n황동 톱니바퀴가 아기자기하게 맞물려 돌아가고, 하얀 증기 압력으로 부드럽게 작동하는 전통적인 아날로그 기계 문명.\n\n### 외견/장비\n기름때가 묻은 가죽 작업복, 정밀 측정용 태엽 고글, 황동 파이프가 연결된 증기 망치와 압력식 외골격 격투 장갑.\n\n### 문화\n장인정신을 소중히 여기며, 지하 대공방과 석탄 화로, 야금술 중심 경제. 보수적이면서도 정이 넘치는 기술 길드 중심 사회.`,
        imageFile: '드워프.png'
    },
    {
        name: '엘프',
        alias: 'Elf',
        theme: 'Cyberpunk',
        colorVar: 'var(--color-elf)',
        shortDescription: '홀로그램과 AI 마스코트가 일상을 편리하게 하는 최첨단 디지털 문명.',
        detailMarkdown: `### 개념\n화려한 홀로그램과 AI 마스코트, 초고속 네트워크가 일상을 편리하게 하는 최첨단 디지털 문명.\n\n### 외견/장비\n야광 네온 장식이 들어간 세련된 로브, 빛나는 사이버 모노 와이어.\n\n### 문화\n거대 기업 중심, 정보 통제로 치안을 유지하며, 비밀개표 후 결과를 공개하는 투명한 사회. 여성만 존재하며, 인간·수인과의 관계를 통해 자손을 남깁니다.`,
        imageFile: '엘프.jpeg'
    },
    {
        name: '오크',
        alias: 'Orc',
        theme: 'Biopunk',
        colorVar: 'var(--color-orc)',
        shortDescription: 'DNA 조작과 살아있는 유기체를 가공해 기술을 대체하는 친환경 생체 문명.',
        detailMarkdown: `### 개념\nDNA 조작과 살아있는 유기체를 가공해 기술을 대체하는 친환경 생체 문명.\n\n### 외견/장비\n꿈틀거리는 근육 조직으로 만든 양손검, 산성 액체를 뿜는 유기체 총기, 거대한 유기체 탑승물.\n\n### 문화\n자연 속 적자생존과 진화를 중시하며, 바이오 기술로 새로운 개체를 생성, 모두가 함께 아이를 키우는 공동 육아 문화.`,
        imageFile: '오크.jpeg'
    },
    {
        name: '용족',
        alias: 'Dragonkin',
        theme: 'Magic',
        colorVar: 'var(--color-dragon)',
        shortDescription: '순수한 마나와 비전 마법, 고대 룬 문자를 사용하는 우아한 마법 문명.',
        detailMarkdown: `### 개념\n순수한 마나와 비전 마법, 고대 룬 문자를 사용하는 우아한 마법 문명.\n\n### 외견/장비\n마법 지팁과 원소 마법, 룬이 새겨진 마법 방벽.\n\n### 문화\n신비주의와 고결함을 추구하며, 광맥에 마나가 응축돼 용족 알이 생성되고, 인간 형태의 여성 용인만 탄생합니다.`,
        imageFile: '용족.png'
    }
];

// Expose as a global variable for non‑module scripts
window.civilizations = civilizations;
