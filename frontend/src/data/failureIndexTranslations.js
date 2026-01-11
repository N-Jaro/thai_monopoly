export const TRANSLATIONS = {
    EN: {
        title: "THE FAILURE INDEX",
        subtitle: "PERSONNEL TURN-OVER VS. PUBLIC POLICY (2014-2026)",
        formulaTitle: "The Failure Formula",
        formulaDesc: "\"When personnel turnover and transparency remain near zero, the index of failure rises regardless of how much money is spent.\"",
        statusTitle: "Status:",
        statusValue: "CRITICAL PERFORMANCE GAP",
        analogyTitle: "Analogy:",
        analogyDesc: "The Thai government is like a legacy smartphone. A flashy new home screen (branding) covers the same underlying code (personnel) that hasn't been rewritten in a decade.",
        verdictTitle: "Intelligence Verdict",
        conclusionLabel: "Conclusion:",
        conclusionDesc: "Infrastructure and budget have become tools for patronage, not progress. Decentralization and reforms are blocked by the 'Sameness' protocols.",
        galleryTitle: "The Gallery of \"Sameness\"",
        institutionalParadox: "The Institutional Paradox",
        finalAnalogy: "\"Imagine a restaurant where the chefs have been in the kitchen for ten years. The budget for ingredients increases every year, but the food continues to come out burnt. Instead of changing the chefs, the restaurant simply changes the menu’s font.\"",
        loopContinues: "The Loop Continues.",
        investigationSite: "Investigation Site",
        same: "Same",
        indicators: {
            staying: "STAYING",
            high: "HIGH",
            declining: "DECLINING",
            stagnant: "STAGNANT",
            constant: "CONSTANT",
            surging: "SURGING",
            falling: "FALLING",
            uneven: "UNEVEN",
            low: "LOW",
            inefficient: "INEFFICIENT"
        }
    },
    TH: {
        title: "ดัชนีความล้มเหลว",
        subtitle: "การหมุนเวียนบุคลากร VS นโยบายสาธารณะ (2557-2569)",
        formulaTitle: "สูตรลัดความล้มเหลว",
        formulaDesc: "\"เมื่อการหมุนเวียนบุคลากรและความโปร่งใสใกล้เป็นศูนย์ ดัชนีความล้มเหลวจะพุ่งสูงขึ้น ไม่ว่าจะทุ่มงบประมาณลงไปมากเพียงใดก็ตาม\"",
        statusTitle: "สถานะ:",
        statusValue: "ช่องว่างประสิทธิภาพขั้นวิกฤต",
        analogyTitle: "การเปรียบเทียบ:",
        analogyDesc: "รัฐบาลไทยเปรียบเสมือนสมาร์ทโฟนรุ่นเก่า หน้าจอหลักที่ดูหรูหรา (การสร้างแบรนด์) ปกปิดโค้ดระบบหลังบ้านแบบเดิม (บุคลากร) ที่ไม่มีการเขียนใหม่มานานนับทศวรรษ",
        verdictTitle: "คำวินิจฉัยข้อมูลข่าวกรอง",
        conclusionLabel: "บทสรุป:",
        conclusionDesc: "โครงสร้างพื้นฐานและงบประมาณกลายเป็นเครื่องมือในการแสวงหาผลประโยชน์ ไม่ใช่เพื่อความก้าวหน้า การกระจายอำนาจและการปฏิรูปถูกปิดกั้นโดยโปรโตคอล \"ความซ้ำซาก\"",
        galleryTitle: "หอศิลป์แห่ง \"ความซ้ำซาก\"",
        institutionalParadox: "ความย้อนแย้งทางสถาบัน",
        finalAnalogy: "\"ลองจินตนาการถึงร้านอาหารที่เชฟอยู่ในครัวมาสิบปี งบประมาณสำหรับวัตถุดิบเพิ่มขึ้นทุกปี แต่อาหารยังคงออกมาไหม้เกรียม แทนที่จะเปลี่ยนเชฟ ร้านอาหารกลับทำเพียงแค่เปลี่ยนฟอนต์ในเมนูเท่านั้น\"",
        loopContinues: "ความซ้ำซากดำเนินต่อไป",
        investigationSite: "จุดตรวจสอบที่",
        same: "เหมือนเดิม",
        indicators: {
            staying: "มั่นคง",
            high: "สูง",
            declining: "ลดลง",
            stagnant: "คงที่",
            constant: "สม่ำเสมอ",
            surging: "พุ่งสูง",
            falling: "ตกต่ำ",
            uneven: "ไม่ทั่วถึง",
            low: "ต่ำ",
            inefficient: "ไร้ประสิทธิภาพ"
        }
    }
};

export const DEPARTMENTS = {
    EN: [
        {
            id: "mot",
            name: "Ministry of Transport (MOT)",
            alias: "The Megaproject Obsession vs. The Traffic Paralysis",
            verdict: "MOT leadership consistently prioritizes high-value 'White Elephant' construction (like the 1.3 trillion baht Kra Land Bridge) over user-centric mobility solutions.",
            indicators: [
                { label: "Personnel (Dynastic Persistence)", status: "STAYING", value: "POSITIVE", desc: "Control remains a 'fiefdom' of Chidchob and Charnvirakul families (BJT)." },
                { label: "Budget Allocation (2025)", status: "HIGH", value: "POSITIVE", desc: "193.6 Billion Baht (Top 5 most funded)." },
                { label: "Bangkok Traffic World Rank", status: "DECLINING", value: "NEGATIVE", desc: "Ranked 2nd most congested city in the world (2024)." },
                { label: "Public Welfare (Accessibility)", status: "STAGNANT", value: "NEGATIVE", desc: "Only 40% population access despite network growth." }
            ]
        },
        {
            id: "moac",
            name: "Ministry of Agriculture & Cooperatives (MOAC)",
            alias: "The Subsidy Trap vs. The Generational Debt Crisis",
            verdict: "By focusing on short-term 'cash band-aids' rather than structural reforms like land rights, the ministry traps the rural population in a debt trap.",
            indicators: [
                { label: "Personnel (Factional Fiefdom)", status: "STAYING", value: "POSITIVE", desc: "Prompao Faction maintains a 'vice-like grip' via family/allies." },
                { label: "Subsidy Spending", status: "CONSTANT", value: "POSITIVE", desc: ">100 Billion Baht annually in populist price guarantees." },
                { label: "Average Household Debt", status: "SURGING", value: "NEGATIVE", desc: "Reached 450,000 Baht (80% increase since 2014)." },
                { label: "Household Solvency", status: "DECLINING", value: "NEGATIVE", desc: "Over 90% of agricultural households are now in debt." }
            ]
        },
        {
            id: "moe",
            name: "Ministry of Education (MOE)",
            alias: "The Human Capital Drain vs. The Massive Budget",
            verdict: "Focuses on maintaining a cumbersome, centralized network of small schools rather than structural reforms, resulting in less productive workforce.",
            indicators: [
                { label: "Personnel (Dynastic Control)", status: "STAYING", value: "POSITIVE", desc: "Controlled by Pol Gen Permpoon Chidchob (Chidchob Clan)." },
                { label: "Budget Allocation (2025)", status: "HIGH", value: "POSITIVE", desc: "340.5 Billion Baht (2nd highest of all ministries)." },
                { label: "Global Competitiveness (HCI)", status: "DECLINING", value: "NEGATIVE", desc: "Lags behind Peers like Vietnam due to poor quality." },
                { label: "Learning Outcomes", status: "FALLING", value: "NEGATIVE", desc: "Categorized by falling harmonized test scores." }
            ]
        },
        {
            id: "moi",
            name: "Ministry of Interior (MOI)",
            alias: "The Bangkok Monopoly vs. The Decentralization Illusion",
            verdict: "Maintains a centralized structure favoriting the capital. Local authorities lack fiscal autonomy to fund their own infrastructure.",
            indicators: [
                { label: "Personnel (Kingmaker)", status: "STAYING", value: "POSITIVE", desc: "Led by Anutin Charnvirakul (BJT Dynasty Leader)." },
                { label: "Budget Allocation (2025)", status: "HIGH", value: "POSITIVE", desc: "294.8 Billion Baht annually." },
                { label: "Resource Distribution", status: "STAGNANT", value: "NEGATIVE", desc: "70% of expenditure utilized in Bangkok." },
                { label: "Local Autonomy", status: "DECLINING", value: "NEGATIVE", desc: "Vision of decentralized government remains unrealized." }
            ]
        },
        {
            id: "moph",
            name: "Ministry of Public Health (MOPH)",
            alias: "Universal Coverage vs. Systemic Inequity",
            verdict: "Prioritizes status quo of centralized systems. Your survival depends on proximity to Bangkok rather than national system quality.",
            indicators: [
                { label: "Personnel (Hereditary)", status: "STAYING", value: "POSITIVE", desc: "Maintained via Thaised/Khaothong dynasties (Sabeeda Thaised)." },
                { label: "Budget Allocation (2025)", status: "HIGH", value: "POSITIVE", desc: "172.2 Billion Baht allocation." },
                { label: "Resource Distribution", status: "UNEVEN", value: "NEGATIVE", desc: "29 provinces without a single forensic pathologist." },
                { label: "Public Welfare (Access)", status: "STAGNANT", value: "NEGATIVE", desc: "Remote disabled face significant barriers to devices." }
            ]
        },
        {
            id: "mod",
            name: "Ministry of Defense (MOD)",
            alias: "Megaproject Inertia vs. Modernization Stagnation",
            verdict: "Functions as a 'budgetary black box'. Recycling leadership ensures national wealth is locked in non-productive assets.",
            indicators: [
                { label: "Personnel (Recycled Elite)", status: "STAYING", value: "POSITIVE", desc: "Recycled brokers protecting military institutional interests." },
                { label: "Budget Allocation (2024)", status: "HIGH", value: "POSITIVE", desc: "198.3 Billion Baht (1.96% increase)." },
                { label: "Transparency", status: "LOW", value: "NEGATIVE", desc: "Project details often kept confidential/black box." },
                { label: "Strategic Efficiency", status: "DECLINING", value: "NEGATIVE", desc: "Potential growth stifled by resistant attitude toward change." }
            ]
        },
        {
            id: "industry",
            name: "Ministry of Industry",
            alias: "Elite Protectionism vs. Global Competitiveness",
            verdict: "Acts as a guardian for 'Business of the State' and conglomerates. Zero incentive for competition reforms due to familial benefits.",
            indicators: [
                { label: "Personnel (Factional)", status: "STAYING", value: "POSITIVE", desc: "Led by Akanat Promphan (Veteran power broker stepson)." },
                { label: "Budget Disbursement", status: "INEFFICIENT", value: "NEGATIVE", desc: "Large firms face little pressure to innovate." },
                { label: "Economic Productivity", status: "FALLING", value: "NEGATIVE", desc: "Real wages rise while labor productivity declines." },
                { label: "SME Growth", status: "DECLINING", value: "NEGATIVE", desc: "Lack of competition harmful to innovation ecosystems." }
            ]
        }
    ],
    TH: [
        {
            id: "mot",
            name: "กระทรวงคมนาคม (คค.)",
            alias: "ความลุ่มหลงในเมกะโปรเจกต์ VS อัมพาตทางการจราจร",
            verdict: "ผู้นำกระทรวงให้ความสำคัญกับการก่อสร้างโครงการขนาดใหญ่ที่มีมูลค่าสูง (เช่น แลนด์บริดจ์ 1.3 ล้านล้านบาท) มากกว่าโซลูชันการเดินทางที่เน้นผู้ใช้เป็นศูนย์กลาง",
            indicators: [
                { label: "บุคลากร (ความยั่งยืนของตระกูล)", status: "มั่นคง", value: "POSITIVE", desc: "การควบคุมยังคงเป็น 'อาณาจักร' ของตระกูลชิดชอบและชาญวีรกูล (ภูมิใจไทย)" },
                { label: "การจัดสรรงบประมาณ (2568)", status: "สูง", value: "POSITIVE", desc: "1.93 แสนล้านบาท (ติดท็อป 5 กระทรวงที่ได้รับงบสูงสุด)" },
                { label: "อันดับจราจรกรุงเทพฯ โลก", status: "ลดลง", value: "NEGATIVE", desc: "ครองอันดับ 2 เมืองที่รถติดที่สุดในโลก (2567)" },
                { label: "สวัสดิการสาธารณะ (การเข้าถึง)", status: "คงที่", value: "NEGATIVE", desc: "ประชากรเข้าถึงได้เพียง 40% แม้โครงข่ายจะขยายตัว" }
            ]
        },
        {
            id: "moac",
            name: "กระทรวงเกษตรและสหกรณ์ (กษ.)",
            alias: "กับดักเงินอุดหนุน VS วิกฤตหนี้สินข้ามรุ่น",
            verdict: "การมุ่งเน้นไปที่ 'เงินช่วยเหลือระยะสั้น' แทนการปฏิรูปเชิงโครงสร้าง เช่น สิทธิในที่ดิน ทำให้เกษตรกรตกอยู่ในกับดักหนี้",
            indicators: [
                { label: "บุคลากร (อาณาจักรของกลุ่มการเมือง)", status: "มั่นคง", value: "POSITIVE", desc: "กลุ่มของธรรมนัสยังคงรักษาอิทธิพลอย่างเหนียวแน่นผ่านครอบครัวและพันธมิตร" },
                { label: "การใช้จ่ายเงินอุดหนุน", status: "สม่ำเสมอ", value: "POSITIVE", desc: "มากกว่า 1 แสนล้านบาทต่อปีในการประกันราคาสินค้าเกษตร" },
                { label: "หนี้ครัวเรือนเฉลี่ย", status: "พุ่งสูง", value: "NEGATIVE", desc: "แตะระดับ 450,000 บาท (เพิ่มขึ้น 80% ตั้งแต่ปี 2557)" },
                { label: "ความสามารถในการชำระหนี้", status: "ลดลง", value: "NEGATIVE", desc: "ครัวเรือนเกษตรกรรมกว่า 90% ตกอยู่ในภาวะหนี้สิน" }
            ]
        },
        {
            id: "moe",
            name: "กระทรวงศึกษาธิการ (ศธ.)",
            alias: "สมองไหล VS งบประมาณมหาศาล",
            verdict: "เน้นการรักษาโครงสร้างเครือข่ายโรงเรียนขนาดเล็กที่ซับซ้อนและรวมศูนย์ มากกว่าการปฏิรูปเชิงโครงสร้าง ส่งผลให้แรงงานมีประสิทธิภาพลดลง",
            indicators: [
                { label: "บุคลากร (การควบคุมโดยตระกูล)", status: "มั่นคง", value: "POSITIVE", desc: "ควบคุมโดย พล.ต.อ.เพิ่มพูน ชิดชอบ (ตระกูลชิดชอบ)" },
                { label: "การจัดสรรงบประมาณ (2568)", status: "สูง", value: "POSITIVE", desc: "3.4 แสนล้านบาท (สูงเป็นอันดับ 2 ของทุกกระทรวง)" },
                { label: "ความสามารถในการแข่งขันโลก (HCI)", status: "ลดลง", value: "NEGATIVE", desc: "ล้าหลังเพื่อนบ้านอย่างเวียดนามเนื่องจากคุณภาพการศึกษาที่ต่ำ" },
                { label: "ผลลัพธ์การเรียนรู้", status: "ตกต่ำ", value: "NEGATIVE", desc: "คะแนนการทดสอบมาตรฐานลดลงอย่างต่อเนื่อง" }
            ]
        },
        {
            id: "moi",
            name: "กระทรวงมหาดไทย (มท.)",
            alias: "การผูกขาดของกรุงเทพฯ VS ภาพลวงตาของการกระจายอำนาจ",
            verdict: "รักษาโครงสร้างแบบรวมศูนย์ที่เอื้อต่อเมืองหลวง ท้องถิ่นขาดอิสระทางการคลังในการระดมทุนเพื่อโครงการพื้นฐานของตนเอง",
            indicators: [
                { label: "บุคลากร (ผู้สร้างนายกฯ)", status: "มั่นคง", value: "POSITIVE", desc: "นำโดย อนุทิน ชาญวีรกูล (ผู้นำตระกูลภูมิใจไทย)" },
                { label: "การจัดสรรงบประมาณ (2568)", status: "สูง", value: "POSITIVE", desc: "2.94 แสนล้านบาทต่อปี" },
                { label: "การกระจายทรัพยากร", status: "คงที่", value: "NEGATIVE", desc: "70% ของงบรายจ่ายถูกใช้ในกรุงเทพฯ และรอบปริมณฑล" },
                { label: "อิสระของท้องถิ่น", status: "ลดลง", value: "NEGATIVE", desc: "วิสัยทัศน์การกระจายอำนาจการปกครองยังไม่เกิดขึ้นจริง" }
            ]
        },
        {
            id: "moph",
            name: "กระทรวงสาธารณสุข (สธ.)",
            alias: "ประกันสุขภาพถ้วนหน้า VS ความเหลื่อมล้ำเชิงระบบ",
            verdict: "ให้ความสำคัญกับการรักษาสถานภาพเดิมของระบบรวมศูนย์ อัตราการรอดชีวิตของคุณขึ้นอยู่กับระยะห่างจากกรุงเทพฯ มากกว่าคุณภาพของระบบโดยรวม",
            indicators: [
                { label: "บุคลากร (การสืบทอดทางสายเลือด)", status: "มั่นคง", value: "POSITIVE", desc: "รักษาอำนาจผ่านตระกูลไทยเศรษฐ์/เกวทอง (ซาบีดา ไทยเศรษฐ์)" },
                { label: "การจัดสรรงบประมาณ (2568)", status: "สูง", value: "POSITIVE", desc: "1.72 แสนล้านบาท" },
                { label: "การกระจายทรัพยากร", status: "ไม่ทั่วถึง", value: "NEGATIVE", desc: "29 จังหวัดไม่มีผู้เชี่ยวชาญด้านนิติเวชแม้แต่คนเดียว" },
                { label: "สวัสดิการสาธารณะ (การเข้าถึง)", status: "คงที่", value: "NEGATIVE", desc: "ผู้พิการในพื้นที่ห่างไกลเผชียบอุปสรรคสำคัญในการเข้าถึงอุปกรณ์ช่วยเหลือ" }
            ]
        },
        {
            id: "mod",
            name: "กระทรวงกลาโหม (กห.)",
            alias: "ความเฉื่อยของเมกะโปรเจกต์ VS การปรับปรุงที่หยุดชะงัก",
            verdict: "ทำหน้าที่เหมือน 'กล่องดำส่งบประมาณ' การรีไซเคิลผู้นำทำให้ความมั่งคั่งของชาติถูกขังอยู่ในสินทรัพย์ที่ไม่ก่อให้เกิดผลผลิต",
            indicators: [
                { label: "บุคลากร (อีลิตรีไซเคิล)", status: "มั่นคง", value: "POSITIVE", desc: "กลุ่มอำนาจรีไซเคิลที่ปกป้องผลประโยชน์ของสถาบันกองทัพ" },
                { label: "การจัดสรรงบประมาณ (2567)", status: "สูง", value: "POSITIVE", desc: "1.98 แสนล้านบาท (เพิ่มขึ้น 1.96%)" },
                { label: "ความโปร่งใส", status: "ต่ำ", value: "NEGATIVE", desc: "รายละเอียดโครงการมักถูกเก็บเป็นความลับหรือไม่เปิดเผย" },
                { label: "ประสิทธิภาพเชิงยุทธศาสตร์", status: "ลดลง", value: "NEGATIVE", desc: "การเติบโตถูกขัดขวางโดยทัศนคติที่ต่อต้านการเปลี่ยนแปลง" }
            ]
        },
        {
            id: "industry",
            name: "กระทรวงอุตสาหกรรม",
            alias: "การปกป้องกลุ่มอีลิท VS ความสามารถในการแข่งขันโลก",
            verdict: "ทำหน้าที่เป็นผู้พิทักษ์ 'ธุรกิจของรัฐ' และกลุ่มทุนขนาดใหญ่ ไม่มีแรงจูงใจในการปฏิรูปการแข่งขันเนื่องจากผลประโยชน์ของตระกูล",
            indicators: [
                { label: "บุคลากร (กลุ่มการเมือง)", status: "มั่นคง", value: "POSITIVE", desc: "นำโดย เอกนัฏ พร้อมพันธุ์ (ลูกเลี้ยงของผู้มีบารมีทางการเมือง)" },
                { label: "การเบิกจ่ายงบประมาณ", status: "ไร้ประสิทธิภาพ", value: "NEGATIVE", desc: "บริษัทขนาดใหญ่แทบไม่มีแรงกดดันให้นวัตกรรม" },
                { label: "ผลิตภาพทางเศรษฐกิจ", status: "ตกต่ำ", value: "NEGATIVE", desc: "ค่าจ้างที่แท้จริงเพิ่มขึ้นขณะที่ผลิตภาพแรงงานลดลง" },
                { label: "การเติบโตของ SME", status: "ลดลง", value: "NEGATIVE", desc: "การขาดการแข่งขันเป็นอันตรายต่อระบบนิเวศนวัตกรรม" }
            ]
        }
    ]
};

export const GALLERY = {
    EN: [
        {
            name: "Shinawatra Family",
            role: "The Populist Playbook",
            desc: "Transitioned from Thaksin to Yingluck to Paetongtarn, utilizing the same populist playbook for 20 years to maintain voter loyalty regardless of results."
        },
        {
            name: "Chidchob Dynasty",
            role: "Party-State Hegemony",
            desc: "Maintains absolute control over Transport and Interior portfolios. This 'Hereditary Cabinet' ensures budget control stays in the family circle."
        },
        {
            name: "Veteran Recyclers",
            role: "The Survival Protocol",
            desc: "Figures like Suriya J. who hold high-level portfolios across the 2000s, the military era, and the current administration. A symbol of personnel recycling."
        }
    ],
    TH: [
        {
            name: "ตระกูลชินวัตร",
            role: "คู่มือประชานิยม",
            desc: "ส่งต่อจากทักษิณสู่ยิ่งลักษณ์จนถึงแพทองธาร โดยใช้ตำราประชานิยมเดิมมาตลอด 20 ปี เพื่อรักษาฐานเสียงโดยไม่คำนึงถึงผลลัพธ์เชิงโครงสร้าง"
        },
        {
            name: "ตระกูลชิดชอบ",
            role: "เฮกมะนีพรรค-รัฐ",
            desc: "รักษาการควบคุมกระทรวงคมนาคมและมหาดไทยอย่างเบ็ดเสร็จ 'คณะรัฐมนตรีสืบสันตติวงศ์' ช่วยให้มั่นใจว่าการคุมงบประมาณจะยังคงอยู่ในวงตระกูล"
        },
        {
            name: "นักรีไซเคิลรุ่นใหญ่",
            role: "โปรโตคอลการเอาตัวรอด",
            desc: "บุคคลอย่าง สุริยะ จึงรุ่งเรืองกิจ ที่รั้งตำแหน่งระดับสูงมาตั้งแต่ยุค 2540 ยุครัฐบาลทหาร จนถึงปัจจุบัน เป็นสัญลักษณ์ของการรีไซเคิลบุคลากร"
        }
    ]
};
