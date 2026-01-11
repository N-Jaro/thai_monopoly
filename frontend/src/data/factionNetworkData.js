import { IMAGES } from './images';

export const NODES = [
    { "id": "anutin", "persistence": 5, "clanKey": "charnvirakul", "partyKey": "bhumjaithai", "color": "#0000ff", "statusKey": "pm", "img": IMAGES.ANUTIN },
    { "id": "newin", "persistence": 5, "clanKey": "chidchob", "partyKey": "bjt_patriarch", "color": "#0000ff", "statusKey": "shadow", "img": IMAGES.NEWIN },
    { "id": "thamanat", "persistence": 4, "clanKey": "prompow", "partyKey": "kla_tham", "color": "#888888", "statusKey": "dpm_agri", "img": IMAGES.THAMMANAT },
    { "id": "suriya", "persistence": 4, "clanKey": "juangroongruangkit", "partyKey": "pheu_thai", "color": "#ff0000", "statusKey": "dpm_transport", "img": IMAGES.SURIYA },
    { "id": "somsak", "persistence": 4, "clanKey": "sukhothai_clan", "partyKey": "pheu_thai", "color": "#ff0000", "statusKey": "public_health", "img": IMAGES.SOMSAK },
    { "id": "phipat", "persistence": 4, "clanKey": "southern_bloc", "partyKey": "bhumjaithai", "color": "#0000ff", "statusKey": "transport", "img": IMAGES.PHIPHAT },
    { "id": "narumon", "persistence": 3, "clanKey": "conservative_clan", "partyKey": "kla_tham", "color": "#888888", "statusKey": "edu", "img": IMAGES.NARUMON },
    { "id": "chaichanok", "persistence": 1, "clanKey": "chidchob", "partyKey": "bhumjaithai", "color": "#0000ff", "statusKey": "digital", "img": IMAGES.CHAICHANOK },
    { "id": "sabida", "persistence": 1, "clanKey": "thaiseth_clan", "partyKey": "bhumjaithai", "color": "#0000ff", "statusKey": "culture", "img": IMAGES.PLACEHOLDER },
    { "id": "akara", "persistence": 1, "clanKey": "prompow", "partyKey": "kla_tham", "color": "#888888", "statusKey": "social", "img": IMAGES.PLACEHOLDER },
    { "id": "ekniti", "persistence": 5, "clanKey": "technocrat", "partyKey": "independent", "color": "#555555", "statusKey": "finance", "img": IMAGES.PLACEHOLDER },
    { "id": "sihasak", "persistence": 5, "clanKey": "diplomat", "partyKey": "independent", "color": "#555555", "statusKey": "foreign", "img": IMAGES.PLACEHOLDER },
    { "id": "treenuch", "persistence": 3, "clanKey": "sa_kaeo", "partyKey": "pprp", "color": "#0055ff", "statusKey": "labour", "img": IMAGES.TREENUCH },
    { "id": "suchart", "persistence": 3, "clanKey": "chonburi_clan", "partyKey": "bhumjaithai", "color": "#0000ff", "statusKey": "dpm_natural", "img": IMAGES.SUCHART }
];

export const LINKS = [
    { "source": "anutin", "target": "suriya", "protocol": "CHAMELEON_ALLIANCE", "strength": 0.8 },
    { "source": "thamanat", "target": "narumon", "protocol": "CLAN_RECYCLING", "strength": 0.9 },
    { "source": "suriya", "target": "somsak", "protocol": "SAMENESS_STABILITY", "strength": 1.0 },
    { "source": "anutin", "target": "ekniti", "protocol": "TECHNOCRAT_MASK", "strength": 0.7 },
    { "source": "newin", "target": "anutin", "protocol": "PATRON_ANCHOR", "strength": 1.0 },
    { "source": "newin", "target": "chaichanok", "protocol": "DYNASTIC_SUCCESSION", "strength": 1.0 },
    { "source": "thamanat", "target": "akara", "protocol": "DYNASTIC_SUCCESSION", "strength": 1.0 },
    { "source": "phipat", "target": "newin", "protocol": "REGIONAL_HUB", "strength": 0.8 },
    { "source": "suchart", "target": "newin", "protocol": "FACTION_SHIFT", "strength": 0.6 },
    { "source": "thamanat", "target": "anutin", "protocol": "SHADOW_LINK", "strength": 0.4, "isShadow": true },
    { "source": "sabida", "target": "anutin", "protocol": "PATRON_ANCHOR", "strength": 0.5 }
];

export const NODE_LABELS = {
    EN: {
        names: {
            anutin: "Anutin Charnvirakul", newin: "Newin Chidchob", thamanat: "Thammanat Prompow",
            suriya: "Suriya Juangroongruangkit", somsak: "Somsak Thepsuthin", phipat: "Phipat Ratchakitprakarn",
            narumon: "Narumon Pinyosinwat", chaichanok: "Chaichanok Chidchob", sabida: "Sabida Thaiseth",
            akara: "Akara Prompow", ekniti: "Ekniti Nitithanpraphat", sihasak: "Sihasak Phuangketkeow",
            treenuch: "Treenuch Thienthong", suchart: "Suchart Chomklin"
        },
        clans: {
            charnvirakul: "Charnvirakul", chidchob: "Chidchob", prompow: "Prompow", juangroongruangkit: "Juangroongruangkit",
            sukhothai_clan: "Sukhothai", southern_bloc: "Southern Bloc", conservative_clan: "Conservative",
            thaiseth_clan: "Thaiseth", technocrat: "Technocrat", diplomat: "Diplomat", sa_kaeo: "Sa Kaeo", chonburi_clan: "Chonburi"
        },
        parties: {
            bhumjaithai: "Bhumjaithai", bjt_patriarch: "Bhumjaithai (Patriarch)", kla_tham: "Independent/Kla Tham",
            pheu_thai: "Pheu Thai", independent: "Independent", pprp: "PPRP"
        },
        statuses: {
            pm: "Prime Minister", shadow: "Shadow Power", dpm_agri: "DPM / Agriculture", dpm_transport: "DPM / Transport",
            public_health: "Public Health", transport: "Transport", edu: "Education", digital: "Digital Economy",
            culture: "Culture", social: "Social Dev.", finance: "Finance", foreign: "Foreign Affairs",
            labour: "Labour", dpm_natural: "DPM / Natural Res."
        }
    },
    TH: {
        names: {
            anutin: "อนุทิน ชาญวีรกูล", newin: "เนวิน ชิดชอบ", thamanat: "ธรรมนัส พรหมเผ่า",
            suriya: "สุริยะ จึงรุ่งเรืองกิจ", somsak: "สมศักดิ์ เทพสุทิน", phipat: "พิพัฒน์ รัชกิจประการ",
            narumon: "นฤมล ภิญโญสินวัฒน์", chaichanok: "ไชยชนก ชิดชอบ", sabida: "ซาบีดา ไทยเศรษฐ์",
            akara: "อัครา พรหมเผ่า", ekniti: "เอกนิติ นิติทัณฑ์ประภาศ", sihasak: "สีหศักดิ์ พวงเกตุแก้ว",
            treenuch: "ตรีนุช เทียนทอง", suchart: "สุชาติ ชมกลิ่น"
        },
        clans: {
            charnvirakul: "ชาญวีรกูล", chidchob: "ชิดชอบ", prompow: "พรหมเผ่า", juangroongruangkit: "จึงรุ่งเรืองกิจ",
            sukhothai_clan: "สุโขทัย", southern_bloc: "กลุ่มใต้", conservative_clan: "สายอนุรักษนิยม",
            thaiseth_clan: "ไทยเศรษฐ์", technocrat: "เทคโนแครต", diplomat: "นักการทูต", sa_kaeo: "สระเเก้ว", chonburi_clan: "ชลบุรี"
        },
        parties: {
            bhumjaithai: "ภูมิใจไทย", bjt_patriarch: "ภูมิใจไทย (ผู้อาวุโส)", kla_tham: "อิสระ/กล้าธรรม",
            pheu_thai: "เพื่อไทย", independent: "อิสระ", pprp: "พปชร."
        },
        statuses: {
            pm: "นายกรัฐมนตรี", shadow: "ผู้มีบารมีนอกรัฐธรรมนูญ", dpm_agri: "รองนายกฯ / เกษตรฯ", dpm_transport: "รองนายกฯ / คมนาคม",
            public_health: "สาธารณสุข", transport: "คมนาคม", edu: "ศึกษาธิการ", digital: "เศรษฐกิจดิจิทัล",
            culture: "วัฒนธรรม", social: "พัฒนาสังคมฯ", finance: "การคลัง", foreign: "ต่างประเทศ",
            labour: "แรงงาน", dpm_natural: "รองนายกฯ / ทรัพยากรฯ"
        }
    }
};

export const CHAIR_HISTORY = {
    suriya: {
        EN: [
            { year: "2019", post: "Industry", party: "PPRP" },
            { year: "2024", post: "Transport", party: "Pheu Thai" },
            { year: "2026", post: "DPM/Transport", party: "Anutin Coalition" }
        ],
        TH: [
            { year: "2562", post: "อุตสาหกรรม", party: "พปชร." },
            { year: "2567", post: "คมนาคม", party: "เพื่อไทย" },
            { year: "2569", post: "รองนายกฯ/คมนาคม", party: "รัฐบาลผสมอนุทิน" }
        ]
    },
    anutin: {
        EN: [
            { year: "2019", post: "Health", party: "Bhumjaithai" },
            { year: "2023", post: "Interior", party: "Bhumjaithai" },
            { year: "2026", post: "Prime Minister", party: "Bhumjaithai" }
        ],
        TH: [
            { year: "2562", post: "สาธารณสุข", party: "ภูมิใจไทย" },
            { year: "2566", post: "มหาดไทย", party: "ภูมิใจไทย" },
            { year: "2569", post: "นายกรัฐมนตรี", party: "ภูมิใจไทย" }
        ]
    },
    thamanat: {
        EN: [
            { year: "2019", post: "Agri (Deputy)", party: "PPRP" },
            { year: "2023", post: "Agriculture", party: "PPRP" },
            { year: "2026", post: "DPM", party: "Kla Tham" }
        ],
        TH: [
            { year: "2562", post: "เกษตรฯ (ช่วย)", party: "พปชร." },
            { year: "2566", post: "เกษตรและสหกรณ์", party: "พปชร." },
            { year: "2569", post: "รองนายกรัฐมนตรี", party: "กล้าธรรม" }
        ]
    },
    ekniti: {
        EN: [
            { year: "2014", post: "Director (Finance)", party: "Technocrat" },
            { year: "2020", post: "Revenue Dept Head", party: "Technocrat" },
            { year: "2025", post: "Finance Minister", party: "Independent" }
        ],
        TH: [
            { year: "2557", post: "ผอ.สคร.", party: "เทคโนแครต" },
            { year: "2563", post: "อธิบดีกรมสรรพากร", party: "เทคโนแครต" },
            { year: "2568", post: "รัฐมนตรีคลัง", party: "อิสระ" }
        ]
    },
    chaichanok: {
        EN: [
            { year: "2023", post: "MP", party: "Bhumjaithai" },
            { year: "2025", post: "Digital Economy", party: "Bhumjaithai" }
        ],
        TH: [
            { year: "2566", post: "ส.ส.บุรีรัมย์", party: "ภูมิใจไทย" },
            { year: "2568", post: "รมว.ดีอีเอส", party: "ภูมิใจไทย" }
        ]
    },
    treenuch: {
        EN: [
            { year: "2021", post: "Education", party: "PPRP" },
            { year: "2025", post: "Labour", party: "PPRP" }
        ],
        TH: [
            { year: "2564", post: "ศึกษาธิการ", party: "พปชร." },
            { year: "2568", post: "แรงงาน", party: "พปชร." }
        ]
    }
};
// ... (rest of CHAIR_HISTORY remains same as previous but grouped by EN/TH)
